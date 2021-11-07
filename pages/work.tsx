import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Head from 'next/head';
import React, { useEffect } from 'react';

const workData = [
  {
    title: 'Freelancing',
    additionalInfo: '',
    role: 'Full-Stack Web Developer and Designer',
    additionalRoleInfo: '',
    period: '2019 - Present',
    tasks: [
      'Building and maintaining web applications with cutting-edge modern technologies.',
      'Designing rich and modern interfaces with good user experience.',
    ],
  },
  {
    title: 'SEAT',
    additionalInfo: 'Vehicle expertise firm, Tunisia',
    role: 'Full-Stack Developer',
    additionalRoleInfo: 'Student internship',
    period: '08/2021 - 09/2021',
    tasks: [
      'Conception and Prototyping of the company management system.',
      'Realisation of the application using Typescript / Node / React / Graphql.',
    ],
  },
  {
    title: 'OffSetGo',
    additionalInfo: 'Early stage Start-up, Canada',
    role: 'Full-Stack Developer',
    additionalRoleInfo: 'Part-time ( Remote )',
    period: '01/2021 - 04/2021',
    tasks: [
      'Working on climate change solution for the cooperative industry.',
      'Building the first MVP using Javascript / Node / React.',
      'Working on carbon emission calculation algorithms.',
    ],
  },
  {
    title: 'SAFI Soft',
    additionalInfo: 'IT Solutions Agency, Tunisia',
    role: 'Developer',
    additionalRoleInfo: 'Student internship',
    period: '01/2020 - 02/2020',
    tasks: [
      'Integrated with Professional Work Envirement.',
      'Observation and Contribution of the realization of fully functional Wordpress websites and management desktop applications.',
    ],
  },
];

export default function Work() {
  useEffect(() => {
    var c = document.getElementById('canv') as HTMLCanvasElement;
    var $: CanvasRenderingContext2D | any = c.getContext('2d');
    var col = function (x: number, y: number, r: number, g: number, b: Number) {
      $.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      $.fillRect(x, y, 1, 1);
    };
    var R = function (x: number, y: number, t: number) {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };
    var G = function (x: number, y: number, t: number) {
      return Math.floor(
        192 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };
    var B = function (x: number, y: number, t: number) {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };
    var t = 0;
    const run = function () {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.05;
      window.requestAnimationFrame(run);
    };
    run();
  }, []);
  return (
    <div>
      <Head>
        <title>Firas Jaber | Work</title>
        <meta name='description' content='Firas Jaber Personal Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <canvas id='canv' width='32' height='32'></canvas>
      <div id='overlay'></div>
      <div className='font-scode absolute text-white z-10 w-screen'>
        <div className='mx-auto container p-8 max-w-2xl'>
          <Navbar />
          <Sidebar />
          <div className='mt-14 sm:mt-10'>
            <h1 className='font-varella font-bold tracking-wide text-xl sm:text-2xl'>
              My Work Experience
            </h1>
            <div>here is the list of my work experience : </div>
            <div className='mt-12 space-y-10'>
              <WorkExperience workData={workData[0]} />
              <hr className='opacity-30' />
              <WorkExperience workData={workData[1]} />
              <hr className='opacity-30' />
              <WorkExperience workData={workData[2]} />
              <hr className='opacity-30' />
              <WorkExperience workData={workData[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface WorkExperience {
  title: String;
  additionalInfo: String;
  role: String;
  additionalRoleInfo: String;
  period: String;
  tasks: Array<String>;
}
interface WorkExperienceProps {
  workData: WorkExperience;
}

export const WorkExperience = ({ workData }: WorkExperienceProps) => {
  const { title, additionalInfo, role, additionalRoleInfo, period, tasks } =
    workData;
  return (
    <div className='my-4'>
      <h2 className='font-bold tracking-wide text-2xl'>{title}</h2>
      {additionalInfo && (
        <span className='text-sm text-gray-400'>{additionalInfo}</span>
      )}
      <h3>{role}</h3>
      {additionalRoleInfo && (
        <span className='block text-sm text-gray-400 mt-0.5'>
          {additionalRoleInfo}
        </span>
      )}
      <span className='text-sm text-gray-300'>{period}</span>
      <h3 className='my-2 text-sm text-gray-400'>Achievements and Tasks</h3>
      <ul className='ml-4 list-disc'>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
