import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../../components/context/styless';
import { StartSteps, TitleText, TypingText } from '../context/othersComponents';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../../../utils/motion';
import { ArrowDown } from '../Icons';
import useThemeSwitcher from './../../components/hooks/useThemeSwitcher';

function TextReveal() {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);
  const [mode, setMode] = useThemeSwitcher(); // Use the custom hook

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text = "Experience the joy of learning, boost confidence, and achieve academic success with our expert tutors. Let's explore their bright future together!";

  const animateText = (textColor) => {
    const anim = gsap.to(
      lettersRef.current,
      {
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: "top center",
          end: "bottom 85%",
        },
        color: textColor,
        duration: 5,
        stagger: 1,
      }
    );
    return anim;
  };

  useEffect(() => {
    let anim = animateText(mode === "dark" ? "#FFFFFF" : "#2A2A2A");

    return (() => {
      anim.kill();
    });
  }, [mode]);


  return (
    <>
      <section className={`${styles.paddings} relative z-10 max-w-7xl mx-auto`}>
      <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <TypingText title="| About IQ Zone" textStyles="text-center dark:text-light/50" />

        <div className= {`${styles.innerWidth} mx-auto h-1/2 ${styles.flexCenter} flex-col`}></div>
          <div className="bg-light dark:bg-dark pl-[10%] pr-[10%]">
            <div ref={triggerRef} className="text-center">
              {text.split("").map((letter, index) => (
                <span
                  className="font-bold text-7xl md:text-6xl sm:text-4xl xs:text-3xl leading- text-center text-dark/5 dark:text-light/5 drop-shadow-sm"
                  key={index}
                  ref={setlettersRef}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-[28px]">
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 1)}
              className="w-[18px] h-[28px] object-contain"
            >
              <ArrowDown className={"fill-dark/50 dark:fill-light/50"} />
            </motion.div>
          </div>

      </div>
      </section>
    </>
  );
}

export default TextReveal;
