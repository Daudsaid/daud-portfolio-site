import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { getProjects } from './lib/github';
import { experienceLabel } from './lib/experience';

export const revalidate = 60;

export default async function HomePage() {
  const projects = await getProjects();
  const stats = {
    projects: projects.length,
    pipelines: projects.filter((p) => p.category === 'Data Engineering').length,
    experience: experienceLabel(),
  };

  return (
    <>
      <Hero stats={stats} />
      <About stats={stats} />
      <Projects />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
    </>
  );
}
