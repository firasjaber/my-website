import React from 'react';

interface Props {}

export const Footer = (props: Props) => {
  return (
    <div className='mt-40'>
      <hr className='opacity-20 my-10' />
      <div>
        <h1 className='text-gray-200 opacity-40 font-varella font-bold tracking-widest text-2xl sm:text-3xl'>
          Firas Jaber
        </h1>
        <div className='text-gray-200 opacity-40 text-md font-normal'>
          firrj.me • 2021
        </div>
      </div>
    </div>
  );
};
