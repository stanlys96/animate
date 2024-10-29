/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogoIcon } from "@/src/components/Logo";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center px-[46px] my-[2rem]">
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="w-[5.2rem] cursor-pointer"
          href="/"
        >
          <LogoIcon props={{}} />
        </motion.a>
        <div className="flex gap-x-[40px] items-center">
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="the-nav-link font-medium cursor-pointer"
          >
            Our work
          </motion.a>
          <motion.a
            href="/services"
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="the-nav-link font-medium cursor-pointer"
          >
            Services
          </motion.a>
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="the-nav-link font-medium cursor-pointer"
          >
            Faq
          </motion.a>
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="the-nav-link font-medium cursor-pointer"
          >
            About us
          </motion.a>
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="the-nav-button font-medium cursor-pointer"
          >
            Start a project
          </motion.a>
        </div>
      </div>
      <div className="flex justify-center items-center h-[55vh]">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="header-title"
        >
          We are a full-cycle agency that delivers turnkey projects, and by
          identifying the{" "}
          <motion.span
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="title-link"
          >
            branding
          </motion.span>
          , creating the <span className="title-link">web design</span>, and{" "}
          <span className="title-link">mobile app</span> we turn it into a live
          product.
        </motion.h1>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="px-[70px] mt-[50px] relative"
      >
        <button className="btn-video-play">
          <i className="icon-triangle" />
        </button>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto" }} // Adjust styles as needed
        >
          <source
            src="https://emote.agency/wp-content/uploads/2021/04/Showreel.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <div className="my-[5rem] px-[118px]">
        <div>
          <p className="font-bold text-[56px]">Our approach</p>
          <Image
            src="../src/components/discover.svg"
            width={600}
            height={500}
            alt="discover"
          />
        </div>
      </div>
    </div>
  );
}
