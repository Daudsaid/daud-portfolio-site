export interface Skill {
  category: string;
  items: string[];
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'Go', 'JavaScript', 'SQL'],
    icon: '💻',
    color: 'blue',
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Gin Framework', 'REST APIs', 'Microservices'],
    icon: '⚙️',
    color: 'cyan',
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    icon: '🎨',
    color: 'indigo',
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'Database Design', 'Query Optimization'],
    icon: '🗄️',
    color: 'purple',
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Git', 'Linux', 'CI/CD', 'Postman'],
    icon: '🛠️',
    color: 'green',
  },
  {
    category: 'Architecture',
    items: ['Clean Architecture', 'Domain-Driven Design', 'API Design', 'Testing'],
    icon: '🏗️',
    color: 'orange',
  },
];
