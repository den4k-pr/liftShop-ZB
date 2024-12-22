import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimateLayout({children} : {children?: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, transform: "scale(0.9), translate(-50%, -50%)" }}
      whileInView={{ opacity: 1, transform: "scale(1), translate(-50%, -50%)" }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimateLayout;
