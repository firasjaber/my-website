import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';

const links = [
  { href: '/work', label: 'work' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-4%' },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [top, setTop] = useState<Boolean>(true);
  useEffect(() => {
    if (document) {
      document.addEventListener('scroll', (e) => {
        let scrolled = document.scrollingElement!.scrollTop;
        if (scrolled >= 50) {
          setTop(false);
        } else {
          setTop(true);
        }
      });
    }
  }, []);

  return (
    <div
      className={`container fixed mx-auto py-6 px-8 h-auto top-0 left-0 sm:hidden transition-all ease-in-out ${
        isOpen && 'bg-opacity-60 py-6 bg-black h-screen'
      }`}
      style={{
        backdropFilter: isOpen ? 'blur(3px)' : 'blur(6px)',
        paddingTop: top ? '18px' : '6px',
        paddingBottom: top ? '18px' : '6px',
      }}
    >
      <div className='flex justify-between items-center'>
        <div>
          <Link href='/home'>/firrj</Link>
        </div>
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={(e: any) => setIsOpen((prev) => !prev)}
        />
      </div>
      <AnimatePresence>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          exit={{ opacity: 0 }}
        >
          {isOpen && (
            <ul className='mt-6 space-y-4'>
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
