import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Sidebar from 'components/Sidebar';
import {
  CssIcon,
  DockerIcon,
  HtmlIcon,
  JavaIcon,
  JsIcon,
  NextjsIcon,
  PhpIcon,
  ReactIcon,
  TsIcon,
} from 'components/icons/DevIcons';

export default function Home() {
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
        <title>Firas Jaber | Home</title>
        <meta name='description' content='Firas Jaber Personal Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <canvas id='canv' width='32' height='32'></canvas>
      <div id='overlay' className='w-full'></div>
      <div className='font-scode absolute text-white z-10 w-screen'>
        <div className='mx-auto container p-8 max-w-2xl'>
          <Navbar />
          <Sidebar />
          <div className='mt-10'>
            <div className='font-varella font-bold tracking-wide text-2xl sm:text-3xl'>
              Hey, I&apos;m Firas Jaber ✌️
            </div>
            <p className='mt-2 text-gray-300 font-varella'>
              i&apos;m a 20 years old developer and designer from Tunisia. I am
              interested in software development, architecture, computer
              networking, and design. I enjoy each process of building a
              product, from conception to deployment.
            </p>
            <div className='mt-8 font-varella font-bold tracking-wide text-xl'>
              Technical skills
            </div>
            <p className='mt-2 text-gray-300 font-varella'>
              Here is a list of tools and languages that I am proficient with
              and used in previous projects :
            </p>
            <div className='mt-2 font-varella font-bold tracking-wide'>
              Programming Languages :
              <div className='m-2 grid grid-cols-3'>
                <Tech icon={<JsIcon />} name='Javascript' />
                <Tech icon={<TsIcon />} name='Typescript' />
                <Tech icon={<JavaIcon />} name='Java' />
              </div>
            </div>
            <div className='mt-2 font-varella font-bold tracking-wide'>
              Frontend Technologies :
              <div className='m-2 grid grid-cols-3'>
                <Tech icon={<HtmlIcon />} name='HTML' />
                <Tech icon={<CssIcon />} name='CSS' />
                <Tech icon={<ReactIcon />} name='Reactjs' />
                <Tech icon={<NextjsIcon />} name='Nextjs' />
              </div>
            </div>
            <div className='mt-2 font-varella font-bold tracking-wide'>
              Backend Technologies :<div className='m-2 grid grid-cols-3'></div>
            </div>
            <div className='mt-2 font-varella font-bold tracking-wide'>
              Devops :
            </div>
            <div className='mt-2 font-varella font-bold tracking-wide'>
              Databases :
            </div>
            <div className='mt-2 font-varella font-bold tracking-wide'>
              Design :
            </div>
            <p className='mt-6 text-gray-300 font-varella'>
              You can also check my work experience, and some of the projects i
              have worked on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
interface TechProps {
  icon: any;
  name: string;
}
const Tech = ({ icon, name }: TechProps) => {
  return (
    <div className='flex items-center space-x-3 my-1 text-gray-200 font-thin text-sm font-mono'>
      {icon}
      <div> {name} </div>
    </div>
  );
};
