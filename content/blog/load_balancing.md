---
title: Load balancing using NGINX and Docker.
description: what is load balancing, and how to scale a nodejs api instances with NGINX and Docker using round-robin method by simple configurations
written_at: 22/12/2021
author: Firas Jaber
---

## Introduction

At the start, let’s first try to understand what's **_load balancing_**, because before we learn a new technique or technology, knowing why it exists and the problem it solves is so important.

Now let's imagine we have a **_Nodejs API_** deployed on the internet, and out of a sudden, the application gets a lot of traffic, like thousends of requests per second, so now our server is **_overloaded_**, many users will face long response times or failed response due to timeout.

that’s where load balancing comes in handy, to solve this issue, we simply create many instances of the same API separately then we try to balance the requests between them for example if we get 1000 request/s, we can create 4 instances and split the requests so we get 250 request/s per each instance, those numbers are not exact and will vary depends on the method of load balancing we are using, for this example we will use round-robin method, which simply means that we pass the first request to instance A, second to instance B, third to instance C, forth goes back to instance A and so on its keeps cycling between our instances in the same order so that the workload doesn't get on a single server and a request doesn't directly affect its previous.

![load_balancer_illustration](https://i.imgur.com/W7beKH1.png)

In technical words : **_Load balancing_** is a process in which the workload is distributed to achieve better efficiency. The ultimate aim here is to optimize the use of our resources available while minimizing response time as much as possible.

The last thing we need to understand before we start is Docker: **Docker** is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries, operation system, and other dependencies, and ship it all out as one package.

## What we are going to do.

In this article, we are going to **_Dockerize_** a really simple Nodejs HTTP server ( we can use any other framework/web application server and apply the same process ) then we are going to start two instances ( containers ) then configure NGINX as a load balancer to distribute the load between them using round-robin method so we can increase the availability and responsiveness of our apps and scale them.

In this demo, we are only going to work with two containers but in the real world, we can spawn more than that depending on the application load and resources.

You can find the [source code](https://github.com/firasjaber/nginx_docker_loadbalancing) on GitHub from here, and here is a peek at the folder structure that we are going to work with :

```dir
.demo
├── api
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   └── index.ts
│   └── tsconfig.json
├── docker-compose.yml
└── nginx
    ├── Dockerfile
    └── nginx.conf
```

First, let’s take a look at our Nodejs application by opening the `index.ts` file:

```ts
import { fastify } from 'fastify';
const PORT = process.env.PORT || 7000;

const server = fastify();

server.get('/', async (request, reply) => {
  return { message: `hello world from ${process.env.INSTANCE_NAME}` };
});

const start = async () => {
  try {
    const address = await server.listen(PORT, '0.0.0.0');
    console.log('Server started successfully on ', address);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
```

It’s a simple HTTP server created with fastify, that listens and responds to requits coming at `"/" route` with a **_JSON_** message with the instance name that we are going to pass as an environment variable later.

Now let’s look at `Dockerfile` that dockerize this application in a container

```docker
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7000

CMD [ "npm", "run", "prod" ]
```

It simply **_loads_** an official Nodejs image from docker, **_copies_** our source code into it, and **_runs_** it after **_installing_** the needed dependencies from package.json using `npm install`.

**Note**: I used a very simple application here so we can focus on load balancing instead, so whats matter here is Docker and Nginx configuration.

Now let’s create an Nginx container, take a look at the `Dockerfile` in the `nginx` directory:

```docker
FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf
```

It **_loads_** Nginx image from docker, then we **_replace_** the default configuration with ours

Now let’s take a look at our `nginx.conf` file:

```nginx
upstream loadbalance {
    # Load balance method
    # is round robin by default
    server api_1:7000;
    server api_2:7000;
}

server {
    location / {
        proxy_pass http://loadbalance;
    }
}
```

First we are going to define our `upstream` servers, which will represent our APIs instances, we are going to use `round-robin` methods as its defined by **default**.

now we use `server`, `location /`  in order to make Nginx **_route_** all our incoming requests to the `upstream` we defined before that will **_distribute_** the requests to our instances.

Now let’s wrap up by binding everything together using **_docker compose_**

Check the `docker-compose.yml` file in our root directory:

```yml
services:
  api_1:
    build:
      context: ./api
    environment:
      - INSTANCE_NAME=INSTANCE_1
    ports:
      - '7001:7000'
  api_2:
    build:
      context: ./api
    environment:
      - INSTANCE_NAME=INSTANCE_2
    ports:
      - '7002:7000'
  loadbalancer:
    build:
      context: ./nginx
    ports:
      - '80:80'
```

With this file, we will **_create_** two instances of our API image `api_1`, `api_2`,  we give them different `INSTANCE_NAME`, then we **_expose_** to the host machine network on different port `7001`/`7002`, finally, we will **_create_** our Nginx load balancer image and **_expose_** it to port 80 so we can test it out in our machine by visiting localhost :  
so let’s do that by running `docker-comose up` command to **_boot_** everything up!

**Note**: the INSTANCE_NAME environment variable is not required, we just log them in the APIs to see which server responded to the request.

Now we can see that everything is working as intended, our requests are getting distributed respectively to our instances one after the other as we explained before.

![Result](https://i.imgur.com/33TOlbX.gif)

We successfully set up an **_Nginx load balancer_** for a dockerized **_Nodejs_** application for two containers ( instances ), and they can be **_scaled_** as required.

You can find all the source code for this demo here

Thanks for reading this article I hope you enjoyed it and learned something new, feel free to contact me if you have feedback  ;)
