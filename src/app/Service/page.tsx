'use client';
import { projects } from './data';
import Card from './components/card';
import {motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function Service() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <main className="margin-top: 50vh margin-bottom: 100vh" ref={container}>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}