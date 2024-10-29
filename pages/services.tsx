/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogoIcon } from "@/src/components/Logo";
import { motion } from "framer-motion";

export default function Services() {
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
          Services
        </motion.h1>
      </div>
    </div>
  );
}
