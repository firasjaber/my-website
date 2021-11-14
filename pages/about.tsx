import { GithubIcon, LinkedIn, Twitter } from 'components/icons/DevIcons';
import { PageLayout } from 'components/PageLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <PageLayout>
      <div>
        <h1 className='font-varella font-bold tracking-wide text-xl sm:text-2xl'>
          About me
        </h1>
        <div className='flex flex-col md:flex-row-reverse mt-4 md:mt-0 space-y-4 md:space-y-0 items-center'>
          <div className='relative w-32 h-32 mx-4'>
            <Image
              src='/firas.jpeg'
              alt='Firas Jaber'
              layout='fill'
              objectFit='cover'
              className='rounded-full'
            />
          </div>
          <div className='flex-1'>
            <p className='mt-2 md:mt-6'>
              My name is Firas Jaber aka firrj. I have been developing web apps
              for the past 2/3 years and continuously learning new things to get
              better at it. I am also currently taking a BSc in IT.
            </p>
            <div className='mt-4 flex items-center'>
              Find me on :{' '}
              <div className='flex mx-2 space-x-2'>
                <a
                  href='https://github.com/firasjaber/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <GithubIcon />
                </a>
                <a
                  href='https://twitter.com/firasjaber9'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Twitter />
                </a>
                <a
                  href='https://www.linkedin.com/in/firas-jaber-203867186/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className='opacity-30 my-10' />
        <div>
          <h1 className='font-varella font-bold tracking-wide text-xl sm:text-2xl'>
            More...
          </h1>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
            aut vero laudantium enim sed sapiente necessitatibus rem! Voluptates
            magnam, dolores laborum blanditiis mollitia eaque rem cumque
            veritatis nisi ipsum.
          </p>
          <p className='mt-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
            aut vero laudantium enim sed sapiente necessitatibus rem! Voluptates
            magnam, dolores laborum blanditiis mollitia eaque rem cumque
            veritatis nisi ipsum.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
