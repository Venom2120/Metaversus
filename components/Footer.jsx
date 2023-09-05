'use client';

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import styles from "../styles";
import { socials } from "../constants";


const Footer = () => (
  <motion.footer
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-7 relative`}
  >

  <div className=" footer-gradient "/>   

  <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
    <div className=" flex flex-wrap justify-between items-center gap-5 ">
      <h4 className=" font-bold md:text-[64px] text-[44px] text-white ">Enter the Metaverse</h4>
      <button type="button" className=" flex items-center h-fit py-4 px-6 rounded-[32px] gap-[12px] bg-[#25618b] ">
        <img src="./headset.svg" alt="headset" className=" w-[24px] h-[24px] object-contain "/>
        <span className=" font-normal text-[16px] text-white ">ENTER METAVERSE</span>
      </button>
    </div>

    <div>
      <div className=" mb-[50px] bg-white opacity-10 h-[2px] "/>

      <div className=" flex flex-row flex-wrap justify-between items-center gap-4">
      <h4 className=" font-extrabold text-[24px] text-white ">METAVERSUS</h4>
      <p className=" font-normal text-[14px] text-white opacity-50  ">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
      <div className=" flex gap-4 ">
        {socials.map((social) => (
          <img key={social.name} src={social.url} alt={social.name} className=" w-[24px] h-[24px] object-contain cursor-pointer " />
        ))}
      </div>

      </div>
    </div>

  </div> 


  </motion.footer>
);

export default Footer;
