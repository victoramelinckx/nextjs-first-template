import React, { useState, useRef } from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  const [isPhone, setIsPhone] = useState(false);
  const phoneNumber = '7868901914';
  const linkRef = useRef();

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      setIsPhone(/(android|iphone)/i.test(navigator.userAgent));
    }
    if (!isPhone) {
      navigator.clipboard.writeText(phoneNumber);
      alert('Number copied: ' + phoneNumber);
    }
  };

  return (
    <div className="absolute left-4 bottom-4
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0
    ">
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />

        <Link
          href={`tel:${isPhone ? phoneNumber : ''}`}
          ref={linkRef}
          onClick={handleClick}
          className='flex items-center justify-center md:z-50
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
          text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
          font-semibold hover:bg-light hover:text-dark

          dark:bg-light dark:text-dark hover:dark:bg-dark
          hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]'
        >
          Call Us
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
