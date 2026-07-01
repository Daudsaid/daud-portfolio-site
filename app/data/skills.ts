export interface Skill {
  category: string;
  items: string[];
  icon: string;
  color: string;
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
    items: ['dbt', 'Apache Airflow', 'Apache Kafka', 'PySpark', 'Pandas', 'Parquet', 'Delta Lake', 'Snowflake', 'Databricks'],
    icon: '⚙️',
    color: 'cyan',
  },
  {
    category: 'Cloud (AWS)',
    items: ['AWS S3', 'AWS Glue', 'AWS Athena'],
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
    category: 'Data Ingestion & APIs',
    items: ['FastAPI', 'REST APIs'],
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