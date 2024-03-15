"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Card = ({ bgColor, children }) => {
  const controls = useAnimation();
  const [isInitialScroll, setIsInitialScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsInitialScroll(true);
        controls.start({ opacity: 1, y: 0 }); 
      } else {
        setIsInitialScroll(false);
        controls.start({ opacity: 0.8, y: -50 }); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  useEffect(() => {
    if (window.scrollY > window.innerHeight) {
      setIsInitialScroll(true);
      controls.start({ opacity: 1, y: 0 }); 
    }
  }, [controls]);

  return (
    <motion.div
      className="card-container"
      style={{
        backgroundColor: bgColor,
        width: '70vw', 
        height: '70vh', 
        margin: 'auto', 
        opacity: isInitialScroll ? 1 : 0.8, 
        borderRadius: '20px', 
        position: 'sticky', 
        top: '0', 
      }}
      initial={{ y: -50 }}
      animate={controls}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Service = () => (
  <div className="flex justify-center items-center">
    <div className="card-stack" style={{ height: '300vh' }}>
      <Card bgColor="blue" key="1">
        Card 1
      </Card>
      <Card bgColor="green" key="2">
        Card 2
      </Card>
      <Card bgColor="yellow" key="3">
        Card 3
      </Card>
      <Card bgColor="red" key="4">
        Card 4
      </Card>
      <Card bgColor="purple" key="5">
        Card 5
      </Card>
    </div>
  </div>
);

export default Service;
