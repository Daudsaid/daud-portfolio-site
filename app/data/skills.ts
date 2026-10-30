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
    category: 'Processing & Orchestration',
    items: ['PySpark', 'Spark Structured Streaming', 'Apache Kafka', 'dbt', 'Apache Airflow', 'Pandas', 'Polars', 'DuckDB', 'PyArrow'],
    icon: '⚙️',
    color: 'cyan',
  },
  {
    category: 'Lakehouse',
    items: ['Delta Lake', 'Databricks', 'Unity Catalog', 'Parquet'],
    practices: ['Medallion Architecture', 'MERGE', 'Change Data Feed', 'replaceWhere'],
    icon: '🏞️',
    color: 'indigo',
  },
  {
    category: 'Databases & Modelling',
    items: ['PostgreSQL', 'Alembic', 'Pydantic'],
    practices: ['Kimball Star Schemas', 'Database Design', 'Query Optimisation'],
    icon: '🗄️',
    color: 'purple',
  },
  {
    category: 'Data Quality',
    items: ['dbt tests', 'pytest', 'chispa'],
    practices: ['Data Contracts', 'Quarantine & Dead-Letter Queues', 'Write-Audit-Publish', 'Row-Count Reconciliation'],
    icon: '✅',
    color: 'green',
  },
  {
    category: 'Data Ingestion & APIs',
    items: ['REST APIs', 'BeautifulSoup', 'WebSocket', 'FastAPI'],
    icon: '🔧',
    color: 'blue',
  },
  {
    category: 'DevOps & BI',
    items: ['Docker', 'Docker Compose', 'GitHub Actions CI/CD', 'Git', 'uv', 'Linux', 'Postman', 'Streamlit', 'Metabase'],
    icon: '🛠️',
    color: 'orange',
  },
  {
    category: 'Web',
    items: ['JavaScript', 'React', 'HTML/CSS'],
    icon: '🌐',
    color: 'cyan',
  },
];
