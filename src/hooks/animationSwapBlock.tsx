import { motion } from 'framer-motion';

function AnimationSwapBlock({children, position} : {children?: React.ReactNode, position: number }) {

  return (
    <motion.div
      initial={{ transform: `translate(${position}px)` }}
      whileInView={{ transform: "translate(0px)" }}
      transition={{ duration: .8 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationSwapBlock;
