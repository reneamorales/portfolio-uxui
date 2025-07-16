import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Projects } from '../components/Projects/Projects';
import { Principles } from '../components/Principles/Principles';
import { DesignTools } from '../components/ToolsGrid/DesignTools/DesignTools';
import { CodeTools } from '../components/ToolsGrid/CodeTools/CodeTools';

const Home = () => (
  <>
    <Hero />
    <Projects />
    <Principles />
    <DesignTools />
    <CodeTools />
  </>
);

export default Home;
