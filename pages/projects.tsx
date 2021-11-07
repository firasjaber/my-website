import {
  ChakraIcon,
  DockerIcon,
  GitIcon,
  JsIcon,
  LinuxIcon,
  MongoIcon,
  NextjsIcon,
  NginxIcon,
  ReactIcon,
  TailwindIcon,
} from 'components/icons/DevIcons';
import Tech from 'components/icons/Tech';
import { PageLayout } from 'components/PageLayout';
import React from 'react';

export default function Projects() {
  return (
    <PageLayout>
      <h1 className='font-varella font-bold tracking-wide text-xl sm:text-2xl'>
        My Projects
      </h1>
      <div>here is the list of my personal and clients project : </div>
      <div className='mt-12 space-y-10'>
        <Project />
        <hr className='opacity-30' />
        <Project />
      </div>
    </PageLayout>
  );
}

export const Project = () => {
  return (
    <div className='my-4'>
      <h2 className='font-bold tracking-wide text-2xl'>Boxy Mall</h2>
      <span className='text-md text-gray-300'>Gaming Ecommerce Website</span>
      <span className='block text-sm text-gray-400'>Freelance Project</span>
      <h3 className='my-2 text-sm text-gray-400'>Description</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        impedit ea ullam, sit vel minima quos quo exercitationem.
      </p>
      <h3 className='my-2 text-sm text-gray-400'>Tech stack :</h3>
      <div className='mt-4 grid grid-cols-auto-fit gap-4'>
        <Tech icon={<JsIcon />} name='Javascript' />
        <Tech icon={<ReactIcon />} name='Reactjs' />
        <Tech icon={<NextjsIcon />} name='Nextjs' />
        <Tech icon={<MongoIcon />} name='MongoDB' />
        <Tech icon={<ChakraIcon />} name='Chakra' />
      </div>
      <div className='text-sm flex space-x-4 mt-4'>
        <span className='p-2 px-4 text-gray-200 cursor-pointer hover:bg-gray-200 hover:bg-opacity-20	 hover:text-gray-50 transition-all ease-in-out'>
          More &gt;
        </span>
        <span className='p-2 px-4 text-gray-200 cursor-pointer hover:bg-gray-200 hover:bg-opacity-20	 hover:text-gray-50 transition-all ease-in-out'>
          Visit &gt;
        </span>
        <span className='p-2 px-4 text-gray-200 cursor-pointer hover:bg-gray-200 hover:bg-opacity-20	 hover:text-gray-50 transition-all ease-in-out'>
          Source code &gt;
        </span>
      </div>
    </div>
  );
};
