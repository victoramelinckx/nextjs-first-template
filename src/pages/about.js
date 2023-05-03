import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import coreImage from "../../public/iqzoneCom.png";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import FrequentlyQuestions from "@/components/Questions";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <NavBar />
      <Head>
      <title>What is IQ Zone About | About Page</title>
        <meta name="description" content="Learn more about IQ Zone, our services and tailored programs." />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Education Is Our Purpose!"
            className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Our journey
              </h2>

              <p className="font-medium">
                Hi, welcome to IQ Zone, where we specialize in providing a wide range
                of personalized educational services, from one-on-one tutoring and homeschooling
                to family coaching and K-12 subject mastery. Our comprehensive approach covers all
                K-12 subjects, and our unique Morning Micro School offers an
                enriching and engaging learning environment.
              </p>

              <p className="my-4 font-medium">
                At IQ Zone, we believe that learning is about more than just academic achievement
                it&apos;s about nurturing a child&apos;s inherent potential and empowering them to
                develop strong study habits and a lifelong love for learning.
                Our experienced and dedicated team of educators are passionate about helping children succeed,
                both academically and personally.
              </p>

              <p className="font-medium">
                Whether your child needs targeted support in a specific subject area,
                is preparing for standardized tests like the SAT, ACT, or FSA,
                or simply needs a nurturing environment to develop their study habits and skills,
                IQ Zone is here to help. We look forward to the opportunity to make a meaningful
                impact on your child&apos;s educational journey and unlock their full potential.
              </p>

            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
              bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={coreImage}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={250} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  satisfied students
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={25} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={19} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default about;
