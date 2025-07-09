import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import { Projects } from '../components/Projects';
import Education from '../components/Education';
import { Blog } from '../components/Blog';

function Portfolio() {
  return (
    <main className='flex flex-col min-h-[100dvh] py-12 px-4 space-y-16'>
      <Nav />
        <Hero />
      <Experience />
      <Projects />
      <Education />
      <Blog />
    </main>
  );
}

export default Portfolio;