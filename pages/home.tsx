import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Sidebar from 'components/Sidebar';
import {
  AdobeAiIcon,
  AdobePsIcon,
  AdobexdIcon,
  AwsIcon,
  AzureIcon,
  CsharpIcon,
  CssIcon,
  DockerIcon,
  DotnetIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  GraphqlIcon,
  HtmlIcon,
  JavaIcon,
  JsIcon,
  LinuxIcon,
  MongoIcon,
  MysqlIcon,
  NextjsIcon,
  NginxIcon,
  NodeIcon,
  OracledbIcon,
  PhpIcon,
  PostgresIcon,
  ReactIcon,
  RedisIcon,
  SymfonyIcon,
  TsIcon,
} from 'components/icons/DevIcons';
import Link from 'next/link';

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
            <h1 className='font-varella font-bold tracking-wide text-2xl sm:text-3xl'>
              Hey, I&apos;m Firas Jaber ✌️
            </h1>
            <p className='mt-2 text-gray-300 font-varella'>
              i&apos;m a 20 years old developer and designer from Tunisia. I am
              interested in software development, architecture, computer
              networking, and design. I enjoy each process of building a
              product, from conception to deployment.
            </p>
            <hr className='my-8 opacity-40' />
            <h2 className='font-varella font-bold tracking-wide text-xl'>
              Technical skills
            </h2>
            <p className='mt-2 text-gray-300 font-varella'>
              Here is a list of tools and languages that I am proficient with
              and used in previous projects :
            </p>
            <div className='mt-6 space-y-6'>
              <div>
                <h3 className='mb-4 font-varella font-bold tracking-wide'>
                  Programming Languages :
                </h3>
                <div className='m-2 grid grid-cols-3 gap-y-3'>
                  <Tech icon={<JsIcon />} name='Javascript' />
                  <Tech icon={<TsIcon />} name='Typescript' />
                  <Tech icon={<JavaIcon />} name='Java' />
                  <Tech icon={<CsharpIcon />} name='C#' />
                  <Tech icon={<PhpIcon />} name='PHP' />
                </div>
              </div>
              <div>
                <h3 className='mb-4 font-varella font-bold tracking-wide'>
                  Frontend Technologies :
                </h3>
                <div className='m-2 grid grid-cols-3 gap-y-3'>
                  <Tech icon={<HtmlIcon />} name='HTML' />
                  <Tech icon={<CssIcon />} name='CSS' />
                  <Tech icon={<ReactIcon />} name='Reactjs' />
                  <Tech icon={<NextjsIcon />} name='Nextjs' />
                </div>
              </div>
              <div>
                <h3 className='mb-4 font-varella font-bold tracking-wide'>
                  Backend Technologies :
                </h3>
                <div className='m-2 grid grid-cols-3 gap-y-3'>
                  <Tech icon={<NodeIcon />} name='Nodejs' />
                  <Tech icon={<RedisIcon />} name='Redis' />
                  <Tech icon={<GraphqlIcon />} name='GraphQL' />
                  <Tech icon={<DotnetIcon />} name='ASP.NET' />
                  <Tech icon={<SymfonyIcon />} name='Symfony' />
                  <Tech icon={<FirebaseIcon />} name='Firebase' />
                </div>
              </div>
              <div>
                <h3 className='mb-4 font-varella font-bold tracking-wide'>
                  Devops and Misc. tools :
                </h3>
                <div className='m-2 grid grid-cols-3 gap-y-3'>
                  <Tech icon={<DockerIcon />} name='Docker' />
                  <Tech icon={<LinuxIcon />} name='Linux' />
                  <Tech icon={<NginxIcon />} name='NGINX' />
                  <Tech icon={<GitIcon />} name='Git' />
                  <Tech icon={<AwsIcon />} name='AWS' />
                  <Tech icon={<AzureIcon />} name='Azure' />
                </div>
              </div>
              <div>
                <h3 className='mb-4 font-varella font-bold tracking-wide'>
                  Databases :
                </h3>
                <div className='m-2 grid grid-cols-3 gap-y-3'>
                  <Tech icon={<PostgresIcon />} name='PostgresQL' />
                  <Tech icon={<MongoIcon />} name='MongoDB' />
                  <Tech icon={<MysqlIcon />} name='MySQL' />
                  <Tech icon={<OracledbIcon />} name='OracleDB' />
                </div>
              </div>
              <div>
                <h3 className='mb-4 font-varella font-bold tracking-wide'>
                  Design :
                </h3>
                <div className='m-2 grid grid-cols-3 gap-y-3'>
                  <Tech icon={<FigmaIcon />} name='Figma' />
                  <Tech icon={<AdobexdIcon />} name='Adobe XD' />
                  <Tech icon={<AdobePsIcon />} name='Adobe PS' />
                  <Tech icon={<AdobeAiIcon />} name='Adobe AI' />
                </div>
              </div>
            </div>
            <p className='mt-10 text-gray-300 font-varella'>
              You can also check my{' '}
              <span className='underline hover:text-gray-100 transition-all ease-in-out'>
                <Link href='/work'>work</Link>
              </span>{' '}
              experience , and some of the{' '}
              <span className='underline hover:text-gray-100 transition-all ease-in-out'>
                <Link href='/projects'>projects</Link>
              </span>{' '}
              i have worked on.
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
    <div className='flex items-center space-x-3  text-gray-200 font-thin text-sm font-mono'>
      {icon}
      <div> {name} </div>
    </div>
  );
};
