import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Footer } from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

interface Props {
  title?: string;
  metaTags?: {
    url: string;
    previewImage: string;
    siteName: string;
    title: string;
    desc: string;
  };
}

export const PageLayout: React.FC<Props> = ({ children, title, metaTags }) => {
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
        <title>{title ? 'Firas Jaber | ' + title : 'Firas Jaber'}</title>
        <meta name='description' content='Firas Jaber Personal Website' />
        {metaTags && (
          <meta property='og:url' content={metaTags.url} key='ogurl' />
        )}
        {metaTags && (
          <meta
            property='og:image:secure_url'
            content={metaTags.previewImage}
            key='ogimage'
          />
        )}
        {metaTags && (
          <meta
            property='og:image'
            content={metaTags.previewImage}
            key='ogimage'
          />
        )}
        {metaTags && (
          <meta
            property='og:image:url'
            content={metaTags.previewImage}
            key='ogimage'
          />
        )}
        {metaTags && (
          <meta
            property='og:site_name'
            content={metaTags.siteName}
            key='ogsitename'
          />
        )}
        {metaTags && (
          <meta property='og:title' content={metaTags.title} key='ogtitle' />
        )}
        {metaTags && (
          <meta
            property='og:description'
            content={metaTags.desc}
            key='ogdesc'
          />
        )}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <canvas id='canv' width='32' height='32'></canvas>
      <div id='overlay' className='w-full'></div>
      <div className='font-scode absolute text-white z-10 w-screen'>
        <div className='mx-auto container p-8 max-w-2xl'>
          <Navbar />
          <Sidebar />
          <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial='hidden' // Set the initial state to variants.hidden
            animate='enter' // Animated state to variants.enter
            exit='exit' // Exit state (used later) to variants.exit
            transition={{ type: 'spring', stiffness: 100 }}
            className='mt-14 sm:mt-10'
          >
            {children}
          </motion.main>

          <Footer />
        </div>
      </div>
    </div>
  );
};
