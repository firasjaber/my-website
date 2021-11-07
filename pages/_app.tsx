import { AppProps } from 'next/dist/shared/lib/router/router';
import { useEffect, useRef } from 'react';
import { loadCursor } from 'utils/cursor';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';
import { playClick } from 'utils/playSound';

function MyApp({ Component, pageProps }: AppProps) {
  const ballCanvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !ballCanvas.current) {
      return;
    }

    return loadCursor(ballCanvas.current);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.document.addEventListener('click', playClick);
  });
  return (
    <div>
      <div
        ref={ballCanvas}
        className='opacity-0 fixed ball-transitions duration-400 pointer-events-none z-30 h-6 w-6 bg-transparent border border-white rounded-full shadow-md'
      />
      <NextNProgress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
