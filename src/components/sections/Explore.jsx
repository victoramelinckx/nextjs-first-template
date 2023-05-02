import { useState } from 'react';
import { motion } from 'framer-motion';
import { exploreWorlds } from '../../../constants';
import Image from 'next/image';
import styles from '../../components/context/styless';
import { ExploreCard, TitleText, TypingText } from '../context/othersComponents';
import { staggerContainer} from '../../../utils/motion';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings} max-w-7xl mx-auto`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Programs" textStyles="text-center dark:text-light/50" />
        <TitleText
          title={<>Discover our tailored programs <br className="md:block hidden" /> and services</>}
          textStyles="text-center dark:text-light"
        />
        <div className="mt-[50px] flex flex-row md:flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
