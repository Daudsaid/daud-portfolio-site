export interface Skill {
  category: string;
  items: string[];
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'Go', 'SQL', 'JavaScript'],
    icon: '💻',
    color: 'blue',
  },
  {
    category: 'Data Engineering',
    items: ['dbt', 'Apache Airflow', 'Apache Kafka', 'PySpark', 'Pandas', 'Parquet', 'Delta Lake'],
    icon: '⚙️',
    color: 'cyan',
  },
  {
    category: 'Cloud & Warehousing',
    items: ['Snowflake', 'Databricks', 'AWS S3', 'AWS Glue', 'AWS Athena'],
    icon: '☁️',
    color: 'indigo',
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Database Design', 'Query Optimisation'],
    icon: '🗄️',
    color: 'purple',
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'JWT', 'OAuth 2.0'],
    icon: '🔧',
    color: 'green',
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Git', 'Linux', 'Postman', 'CI/CD'],
    icon: '🛠️',
    color: 'orange',
  },
];