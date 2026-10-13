import { getProjects } from '../lib/github';
import ProjectsSection from './ProjectsSection';

export default async function Projects() {
  const projects = await getProjects();
  return <ProjectsSection projects={projects} />;
}
