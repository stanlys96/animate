import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
  children: any;
}

export default function PageTransition({ children }: Props) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }} // Adjust the duration as needed
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
