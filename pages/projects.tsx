import {
  ChakraIcon,
  DockerIcon,
  GitIcon,
  GraphqlIcon,
  JsIcon,
  LinuxIcon,
  MongoIcon,
  NextjsIcon,
  NginxIcon,
  NodeIcon,
  PostgresIcon,
  ReactIcon,
  TailwindIcon,
  TsIcon,
} from 'components/icons/DevIcons';
import Tech from 'components/icons/Tech';
import { PageLayout } from 'components/PageLayout';
import React from 'react';

const projectsData = [
  {
    title: 'Boxy Mall',
    shortDesc: 'Gaming Ecommerce Website',
    type: 'Freelance Project',
    longDesc:
      'Gaming e-commerce website that has a minimalistic user interface and comes with back-office for managing products and handling orders. this website is built from scratch with Nextjs to support server-side generation and rendering to offer blazing fast performance and SEO results.',
    githubUrl: '',
    liveUrl: 'https://boxymall.com',
    readmeUrl: '',
  },
  {
    title: 'SEAT Management System',
    shortDesc: 'Vehicle Firm Management System',
    type: 'Internship Project',
    longDesc:
      'Company management web application for organizing employees, tasks, and missions with rich admin functionalities and a clean user interface. The app is written in Typescript both for the backend and the frontend communicating with Graphql to provide front-to-back type safety and well-organized code structure.',
    githubUrl: 'https://github.com/firasjaber/rb-expertise',
    liveUrl: '',
    readmeUrl: '',
  },
  {
    title: 'COTA',
    shortDesc: 'Online Casino website',
    type: 'Freelance Project',
    longDesc:
      'Online gambling website that provides real-time services and complete admins dashboard to manage users and their transactions integrated with third parties APIs for getting and handling games events.All the differenct services are written in Javascript with an NGINX reverse proxy and load balancer in front to provide high availability and excellent performance',
    githubUrl: '',
    liveUrl: '',
    readmeUrl: '',
  },
  {
    title: 'MyShelf',
    shortDesc: 'Books management web app',
    type: 'Personal Project',
    longDesc:
      'Single page application to manage my booklist and store them for reading later or bookmarking, integrated with Google Books API, and have authentication for different users.',
    githubUrl: 'https://github.com/firasjaber/bookshelf',
    liveUrl: '',
    readmeUrl: '',
  },
];

export default function Projects() {
  return (
    <PageLayout>
      <h1 className='font-varella font-bold tracking-wide text-xl sm:text-2xl'>
        Featured Projects
      </h1>
      <div>
        for the past 2 years, i have been working on cool clients and personal
        projects, here is some of them :
      </div>
      <div className='mt-12 space-y-10'>
        <Project projectData={projectsData[0]}>
          <Tech icon={<JsIcon />} name='Javascript' />
          <Tech icon={<ReactIcon />} name='Reactjs' />
          <Tech icon={<NextjsIcon />} name='Nextjs' />
          <Tech icon={<MongoIcon />} name='MongoDB' />
          <Tech icon={<ChakraIcon />} name='Chakra' />
        </Project>
        <hr className='opacity-30' />
        <Project projectData={projectsData[1]}>
          <Tech icon={<TsIcon />} name='Typescript' />
          <Tech icon={<NodeIcon />} name='Nodejs' />
          <Tech icon={<GraphqlIcon />} name='GraphQL' />
          <Tech icon={<ReactIcon />} name='Reactjs' />
          <Tech icon={<PostgresIcon />} name='Postgres' />
          <Tech icon={<TailwindIcon />} name='Tailwind' />
          <Tech icon={<DockerIcon />} name='Docker' />
        </Project>
        <hr className='opacity-30' />
        <Project projectData={projectsData[2]}>
          <Tech icon={<JsIcon />} name='Javascript' />
          <Tech icon={<NodeIcon />} name='Nodejs' />
          <Tech icon={<ReactIcon />} name='Reactjs' />
          <Tech icon={<MongoIcon />} name='MongoDB' />
          <Tech icon={<NginxIcon />} name='NGINX' />
        </Project>
        <hr className='opacity-30' />
        <Project projectData={projectsData[3]}>
          <Tech icon={<JsIcon />} name='Javascript' />
          <Tech icon={<NodeIcon />} name='Nodejs' />
          <Tech icon={<ReactIcon />} name='Reactjs' />
          <Tech icon={<MongoIcon />} name='MongoDB' />
        </Project>
      </div>
      <p className='mt-20 text-gray-300 font-varella'>
        You can also check some of my open source projects at my{' '}
        <span className='underline hover:text-gray-100 transition-all ease-in-out'>
          <a
            href='https://github.com/firasjaber/'
            target='_blank'
            rel='noreferrer'
          >
            github profile
          </a>
        </span>
        .
      </p>
    </PageLayout>
  );
}

interface Project {
  title: string;
  shortDesc: string;
  type: string;
  longDesc: string;
  githubUrl: string;
  liveUrl: string;
  readmeUrl: string;
}
interface ProjectProps {
  projectData: Project;
}

export const Project: React.FC<ProjectProps> = ({ projectData, children }) => {
  const { title, shortDesc, type, longDesc, githubUrl, liveUrl, readmeUrl } =
    projectData;
  const availableStyles =
    'p-2 px-4 text-gray-200 cursor-pointer hover:bg-gray-200 hover:bg-opacity-20	 hover:text-gray-50 transition-all ease-in-out';
  const blockedStyles = 'p-2 px-4 text-gray-400 cursor-not-allowed';
  return (
    <div className='my-4'>
      <h2 className='font-bold tracking-wide text-2xl'>{title}</h2>
      <span className='text-md text-gray-300'>{shortDesc}</span>
      <span className='block text-sm text-gray-400'>{type}</span>
      <h3 className='my-2 text-sm text-gray-400'>Description</h3>
      <p>{longDesc}</p>
      <h3 className='my-2 text-sm text-gray-400'>Tech stack :</h3>
      <div className='mt-4 grid grid-cols-auto-fit gap-4'>{children}</div>
      <div className='text-sm flex space-x-4 mt-4'>
        <span className={readmeUrl != '' ? availableStyles : blockedStyles}>
          {readmeUrl ? (
            <a href={readmeUrl} target='_blank' rel='noreferrer'>
              More &gt;
            </a>
          ) : (
            <>More &gt;</>
          )}
        </span>
        <span className={liveUrl != '' ? availableStyles : blockedStyles}>
          {liveUrl ? (
            <a href={liveUrl} target='_blank' rel='noreferrer'>
              Visit &gt;
            </a>
          ) : (
            <>Visit &gt;</>
          )}
        </span>
        <span className={githubUrl != '' ? availableStyles : blockedStyles}>
          {githubUrl ? (
            <a href={githubUrl} target='_blank' rel='noreferrer'>
              Source code &gt;
            </a>
          ) : (
            <>Source code &gt;</>
          )}
        </span>
      </div>
    </div>
  );
};
