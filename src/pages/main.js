import React, { useState, useRef } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/prueba.svg"
import coreImage from "../../public/iqzoneCom.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import BookImage from "../../public/images/svgs/book_image.svg"
import TransitionEffect from '@/components/TransitionEffect'
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import About from '@/components/sections/About'
import Testimonial from '@/components/testimonialSection'
import NumberSection from '@/components/numberSection'
import GetStarted from '@/components/sections/GetStarted'
import Explore from '@/components/sections/Explore'
import Feedback from '@/components/sections/Feedback'
import GetInTouch from '@/components/getInTouch'
import MyGoogleMap from '@/components/GoogleMaps'
import ContactUs from '@/components/ContactUs';
import FrequentlyQuestions from '@/components/Questions'
import TextReveal from '@/components/sections/aboutTwo';
import Landing from './landing';


export default function Home() {

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
    <>
      <NavBar />
      <Head>
        <title>Awesome Portfolio Built with Nextjs</title>
        <meta
          name="description"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />
      <div className='overflow-hidden'>
        <Landing/>
        <div className='relative'>
          <TextReveal />
          <GetStarted />
          <Explore />
        </div>
        <NumberSection/>
        <Testimonial />
        <MyGoogleMap />
        <Feedback />
        <GetInTouch/>
        <FrequentlyQuestions />
        <ContactUs/>
        <Footer />
      </div>
      
    </>
  )
}
