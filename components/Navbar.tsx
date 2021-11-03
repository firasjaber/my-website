import Link from 'next/link';

const links = [
  { href: '/', label: 'work' },
  { href: '/', label: 'projects' },
  { href: '/', label: 'about' },
];

const Navbar = () => {
  return (
    <div className='hidden w-full  justify-between mx-auto items-center mt-10 sm:flex'>
      <ul className='flex justify-between'>
        <li className='px-2 py-1 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-50 cursor-pointer transition-all ease-in-out'>
          <Link href='/'>/firrj</Link>
        </li>
      </ul>
      <ul className='flex space-x-1'>
        {links.map((link) => (
          <li
            key={link.label}
            className='px-3 py-1 hover:bg-gray-200 hover:bg-opacity-20 hover:text-gray-50 cursor-pointer transition-all ease-in-out'
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
