export interface Skill {
  category: string;
  items: string[];
  icon: string;
  color: string;
  // Concepts, not tools: shown separately and not counted as technologies.
  practices?: string[];
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'SQL'],
    icon: '💻',
    color: 'blue',
  },
  {
    category: 'Data Engineering',
    items: ['dbt', 'Apache Airflow', 'Apache Kafka', 'PySpark', 'Pandas', 'Parquet', 'Delta Lake', 'Databricks'],
    icon: '⚙️',
    color: 'cyan',
  },
  {
    category: 'Databases',
    items: ['PostgreSQL'],
    practices: ['Database Design', 'Query Optimisation'],
    icon: '🗄️',
    color: 'purple',
  },
  {
    category: 'Data Ingestion',
    items: ['REST APIs', 'BeautifulSoup', 'WebSocket'],
    icon: '🔧',
    color: 'green',
  },
  {
    category: 'Backend/APIs',
    items: ['FastAPI'],
    icon: '🧩',
    color: 'blue',
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Git', 'Linux', 'Postman', 'CI/CD'],
    icon: '🛠️',
    color: 'orange',
  },
];