export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  category: string;
  pushedAt?: string;
}

export const GITHUB_USERNAME = "Daudsaid";

// Repos never shown, even if they carry the 'portfolio' topic.
export const hiddenRepos: string[] = ["daud-portfolio-site"];

export interface ProjectOverride {
  title?: string;
  description?: string;
  tags?: string[];
  demo?: string | null;
  featured?: boolean;
  category?: string;
  order?: number;
}

// Repos listed here are always shown. Any other repo appears only if it has
// the GitHub topic 'portfolio'. Overrides win over GitHub metadata.
export const projectOverrides: Record<string, ProjectOverride> = {
  "nhs-ae-elt": {
    order: 1,
    title: "NHS A&E Waiting List Pipeline",
    description: "End-to-end pipeline ingesting NHS England A&E attendance and emergency admissions data over 5 years (April 2021 – February 2026), at provider level across NHS Trusts and Foundation Trusts — 11,986 rows from 59 monthly files. Python ingestion (BeautifulSoup/Requests), PySpark transformation into Snowflake, dbt modelling, orchestrated via Airflow on Docker.",
    tags: ["Python", "PySpark", "dbt", "Snowflake", "Airflow", "Docker", "BeautifulSoup"],
  },
  "land-registry-pipeline": {
    order: 2,
    title: "UK Land Registry Pipeline",
    description: "Big data pipeline processing 10,057,373 property transactions from HM Land Registry (2016–2026). Python ingestion loads ~1.7 GB of CSV data into Snowflake, with DuckDB for local exploration. dbt models produce national price trends, property type breakdowns, and London borough-level analysis — 7/7 tests passing.",
    tags: ["Python", "DuckDB", "dbt", "Snowflake", "Pandas"],
  },
  "fintech-fraud-detection-pipeline-bydaud": {
    order: 3,
    title: "Fintech Fraud Detection Pipeline",
    description: "Production-grade fraud detection pipeline ingesting 590,540 IEEE-CIS transactions. Features 12 engineered fraud signals, rule-based scoring (0–100), Apache Kafka streaming for real-time alerts, dbt models (6/6 tests passing), and end-to-end Airflow orchestration — all Dockerised.",
    tags: ["Python", "Apache Kafka", "dbt", "PostgreSQL", "Airflow", "Docker"],
  },
  "crypto-stream-pipeline-bydaud": {
    order: 4,
    title: "Crypto Stream Pipeline",
    description: "Real-time streaming pipeline ingesting live BTC/ETH price ticks from the Binance WebSocket API through Apache Kafka into PostgreSQL. dbt models produce 1-minute OHLC candlesticks and rolling volatility metrics.",
    tags: ["Python", "Apache Kafka", "dbt", "PostgreSQL", "Docker", "WebSocket"],
  },
  "uk-labour-stress-pipeline": {
    order: 5,
    title: "UK Labour Stress Pipeline",
    description: "Databricks-native pipeline ingesting ONS regional labour market data and producing a composite stress score index across UK regions. Uses a medallion architecture (Bronze → Silver → Gold) with PySpark, Delta Lake, and dbt models.",
    tags: ["Python", "PySpark", "Databricks", "dbt", "Delta Lake"],
  },
  "boe-stats-pipeline": {
    order: 6,
    title: "BoE Stats Pipeline",
    description: "Data pipeline extracting macroeconomic series from the Bank of England IADB API — base rate, GBP/USD, GBP/EUR, mortgage rates, and M4 money supply. dbt project with 14/14 passing tests, staging and mart layers, orchestrated via Airflow.",
    tags: ["Python", "dbt", "PostgreSQL", "Airflow", "Docker"],
  },
  "fca-register-pipeline": {
    order: 7,
    title: "FCA Register Pipeline",
    description: "End-to-end data pipeline ingesting the UK FCA financial services register. Features SCD Type 2 snapshots, dbt models and tests (12/12 passing), and dual-target deployment to both local PostgreSQL and Snowflake.",
    tags: ["Python", "dbt", "Snowflake", "PostgreSQL", "Docker", "Airflow"],
  },
  "uk-crime-pipeline": {
    order: 8,
    title: "UK Crime Pipeline",
    description: "Batch data pipeline extracting 17,000+ crime records from the UK Police API. Stores data as Parquet, loads to PostgreSQL, and extends to AWS with S3, Glue, and Athena for cloud analytics.",
    tags: ["Python", "dbt", "PostgreSQL", "AWS S3", "AWS Glue", "Athena", "Parquet"],
  },
  "realtime-flight-tracker": {
    description: "Real-time flight tracking pipeline: OpenSky API → Kafka → Postgres → Streamlit.",
    tags: ["Python", "OpenSky API", "Kafka", "Postgres", "Streamlit"],
  },
  "premier-league-pipeline-2627": {},
  "uk-trade-pipeline": {},
  "uk-energy-pipeline": {},
};
