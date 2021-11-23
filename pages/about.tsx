import { GithubIcon, LinkedIn, Twitter } from 'components/icons/DevIcons';
import { PageLayout } from 'components/PageLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <PageLayout title='about'>
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
            My passion for web development actually started before going to
            college, since I was a kid, I was curious about technology in
            general. I tried to learn many things in my childhood such as game
            development, design, video editing, and more... but the one that I
            liked the most and stuck with it is web development and I wanted to
            pursue a career in it.
          </p>
          <p className='mt-8'>
            after picking up the basics, for the past 2 and a half years, I have
            been building freelance & personal projects with cutting-edge modern
            technologies and maintaining them.
          </p>
          <p className='mt-8'>
            as for now, I have been obsessed with software architecture, cloud
            infrastructure, DevOps, and web3. I have been learning a lot about
            them by reading and practicing in some of my side projects. and I
            want to take my career in one of those directions.
          </p>
        </div>
        <hr className='opacity-30 my-10' />
        <div>
          <h1 className='font-varella font-bold tracking-wide text-lg sm:text-xl'>
            Contact
          </h1>
          <p className='mt-3'>
            I am most responsive through Discord DMs ({' '}
            <span className='underline hover:text-gray-100 transition-all ease-in-out'>
              firrj#4628
            </span>{' '}
            ). you can also reach me by emailing{' '}
            <span className='underline hover:text-gray-100 transition-all ease-in-out'>
              contact@firrj.me
            </span>
          </p>
          <h1 className='mt-8 font-varella font-bold tracking-wide text-lg sm:text-xl'>
            Thanks
          </h1>
          <p className='mt-3'>
            Thanks for visiting. I hope you enjoyed your stay. The source code
            for this website is available{' '}
            <span className='underline hover:text-gray-100 transition-all ease-in-out'>
              <a
                href='https://github.com/firasjaber/my-website'
                rel='noreferrer'
                target='_blank'
              >
                here &#8599;
              </a>
            </span>{' '}
            .
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
