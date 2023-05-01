import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import coreImage from "../../public/iqzoneCom.png";
import BookImage from "../../public/images/svgs/book_image.svg";

const Landing = () => {
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
    <main className='flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start'>
      <Layout className='pt-0 md:pt-16 sm:pt-16'>
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className='w-1/2 md:w-full flex justify-center'>
            <Image src={coreImage} alt="CodeBucks" className='w-3/4 h-3/4 flex justify-center lg:hidden md:inline-block md:w-3/4'
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 25vw,
            25vw"
            />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <AnimatedText text="Unlock Your Child's Full Potential with IQ Zone" className='!text-6xl !text-left 
            xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
            '/>
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
            Your One-Stop Destination for Comprehensive Tutoring, School Supplies, and Uniforms
            </p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link
              className="flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
              hover:dark:border-light md:p-2 md:px-4 md:text-base
              "
              href={`tel:${isPhone ? phoneNumber : ''}`}
              ref={linkRef}
              onClick={handleClick}

              >Call<LinkArrow className={"w-6 ml-1"}/>
              
              </Link>
              <Link href="mailto:abcd@gmail.com" target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
              >Contact</Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div className='absolute right-8 bottom-8 inline-block w-48 md:hidden'>
        <Image src={BookImage} alt="IqZone" className='w-full h-auto' />
      </div>
    </main>
  );
};

export default Landing;
