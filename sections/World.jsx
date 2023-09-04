'use client';

import { motion } from "framer-motion";
import styles from "../styles";

import { TypingText, TitleText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: "false", amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
  >
    <TypingText title="| People on the World" textStyles="text-center"/>
    
  </motion.div>
  </section>
);

export default World;
