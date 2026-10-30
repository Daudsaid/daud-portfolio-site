import type { Project } from '../data/projects';
import ProjectsSection from './ProjectsSection';

export default function Projects({ projects }: { projects: Project[] }) {
  return <ProjectsSection projects={projects} />;
}
