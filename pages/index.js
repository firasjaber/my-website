import { useEffect, useState } from 'react';
import Head from 'next/head';
import Technologies from '../components/Technologies';

export default function Home() {
  useEffect(() => {
    var c = document.getElementById('canv');
    var $ = c.getContext('2d');
    var col = function (x, y, r, g, b) {
      $.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      $.fillRect(x, y, 1, 1);
    };
    var R = function (x, y, t) {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };
    var G = function (x, y, t) {
      return Math.floor(
        192 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };
    var B = function (x, y, t) {
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
        <title>Firas Jaber</title>
        <meta name='description' content='Firas Jaber Personal Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <canvas id='canv' width='32' height='32'></canvas>
      <div id='overlay'></div>
      <div className='font-scode absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white'>
        <div className='flex mb-1 opacity-85 tracking-wider'>
          Hey <div className='ml-1 mr-2 origin-70 animate-wiggle'>👋 </div> , i
          am
        </div>
        <h1 className='font-varella text-5xl tracking-widest -ml-1'>
          FIRAS JABER
        </h1>
        <div className='opacity-80 tracking-wider mb-2'>
          A Full-Stack Developer and Designer.
        </div>
        <Technologies />
      </div>
    </div>
  );
}
