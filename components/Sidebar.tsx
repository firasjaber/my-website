import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

const links = [
  { href: '/work', label: 'work' },
  { href: '/projects', label: 'projects' },
  { href: '/about', label: 'about' },
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-4%' },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  return (
    <div
      className={`container mx-auto p-6 px-8 h-screen absolute top-0 left-0 sm:hidden ${
        isOpen && 'bg-opacity-60  bg-black'
      }`}
      style={{ backdropFilter: isOpen ? 'blur(3px)' : '' }}
    >
      <div className='flex justify-between items-center'>
        <div>/firrj</div>
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
