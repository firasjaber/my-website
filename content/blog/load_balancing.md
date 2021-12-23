---
title: Load balancing using NGINX and Docker.
description: what is load balancing, and how to scale a nodejs api instances with NGINX and Docker using round-robin method by simple configurations
written_at: 22/12/2021
author: Firas Jaber
---

## Introduction

First, before we dig into more informations, lets first try to understand what's load balancing and what problem it solves because understanding the problem is 50% of getting to the solution.  
Now let's imagine we have a Nodejs API deployed on the internet, and out of the sudden, our product gets alot of traffic, like thousends of requests per second, so now our server is "overloaded", so many users will face long response times or failed response due to timeout.  
Thats where load balancing comes handy, to solve this issue, we simply create many instance of the same api seperatly then we try to distrubute the requests between them for exemple if we get 1000 request/s, we can create 4 instance and split the requests so we get 250 request/s per each instance, those numbers are not exact and will vary depends on the method of load balancing we are using, for this example we will use round-robin method, which simply means that we pass the first request to instance A, second to instance B, third to instance C, forth goes back to instance A and so on its keeps cycling between our instances in the same order.  
so in conclusion : Load balancing is a process in which the workload is distributed to achieve better efficiency. The ultimate aim here is to optimize the use of our resources available while minimizing response time as much as possible.

last thing before we need to understand before we start, is Docker : **Docker** is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries , operation system and other dependencies, and ship it all out as one package.

## What we are going to do.

in this article, we are going to Dockerize a really simple Nodejs HTTP server ( we can use any other framework / web application server and apply the same process ) then we are going to start two instances ( containers ) then configure NGINX as a load balancer to distrubute the load between the containers using round-robin method so we can increase the perormance and responsiveness of our apps and scale them.  
we are only going to work with two containers but in the real world we can spawn more then that depends on the application load and resources.  
first lets take a look at our nodejs application by opening index.ts file, its a simple http server created with fastify, thats simple reponds to route "/" with a json message with the instance name that we are going to pass to it as an environment variable later. you can look at the source code from here.  
now lets look at Dockerfile that dockerize this application in a container:  
i used a very simple application here so we can focus on load balancing instead, so whats matter here is Docker and Nginx configaration.  
Now lets create an Nginx container, create Dockerfile in the nginx directory, we simple use nginx image from docker, then we replace our config into the container,  
so now lets create our nginx conf file, first we are going to define our upstream servers, those will represent our apis instances, and we are going to use round-robin methods as its difined by default.  
now we use server / location to simple tells nginx to route all our requests to the upstream we defined before that will distrubite the requests at our instances.

now lets wrap up by binding everything togather using docker-compse:  
we create docker-compose.yml file in our root directory, we will create two instances of our web app image we give them different INSTANCE_NAME ( this is not required we just use the instance name to see later which server responded to our request ) also they are going to be exposed on different port, now we will create our nginx image and expose it to port 80 so we can test it out in our machine by visiting localhost so lets do that by running `docker-comose up` command to boot everything up !

now we can see that everything is working as intented, our requests are getting distrubuted respectivly to our instances one after the other as we explined before.  
so we succefully set up a Nginx load balancer for a dockerized node ( fastify ) application for two containers ( instances ), and they can be scaled as per the required.  
you can find all the source code for this demo here

thanks for reading this article i hope you enjoyed it and learned something new, feel free to contact me if you have a feedback ;) .
