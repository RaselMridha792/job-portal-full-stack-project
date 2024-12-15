import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/bannerImage/team1.jpg";
import team2 from "../../assets/bannerImage/team2.jpg";
import bannerBg from "../../assets/bannerImage/navbg.png";

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-min md:py-20"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="hero-content lg:gap-40 flex-col-reverse lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{ y: [0, 150, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              src={team1}
              className="max-w-sm rounded-[35px] rounded-bl-none border-green-500 border-l-[8px] border-b-[8px] shadow-2xl"
            />
            <motion.img
              animate={{ x: [50, 150, 50] }}
              transition={{ duration: 10, delay:5, repeat: Infinity }}
              src={team2}
              className="max-w-sm hidden lg:flex shadow-2xl rounded-[35px] rounded-bl-none border-green-500 border-l-[8px] border-b-[8px]"
            />
          </div>
          <motion.div
            whileInView={{y:0}}
            transition={{ duration: 1 }}
            initial={{ y: -100 }}
            className="flex-1"
          >
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <motion.button
              whileTap={{ scale: 1.5 }}
              className="btn btn-primary"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
