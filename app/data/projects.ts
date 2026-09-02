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
}

export const projects: Project[] = [
  // ── Data Engineering (featured) ──────────────────────────────────────────
  {
    id: 1,
    title: "NHS A&E Waiting List Pipeline",
    description: "End-to-end pipeline ingesting NHS England A&E attendance and emergency admissions data over 5 years (April 2021 – February 2026), at provider level across NHS Trusts and Foundation Trusts — 11,986 rows from 59 monthly files. Python ingestion (BeautifulSoup/Requests), PySpark transformation into Snowflake, dbt modelling, orchestrated via Airflow on Docker.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "PySpark", "dbt", "Snowflake", "Airflow", "Docker", "BeautifulSoup"],
    github: "https://github.com/Daudsaid/nhs-waitinglist-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 2,
    title: "UK Land Registry Pipeline",
    description: "Big data pipeline processing 10,057,373 property transactions from HM Land Registry (2016–2026). Python ingestion loads ~1.7 GB of CSV data into Snowflake, with DuckDB for local exploration. dbt models produce national price trends, property type breakdowns, and London borough-level analysis — 7/7 tests passing.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "DuckDB", "dbt", "Snowflake", "Pandas"],
    github: "https://github.com/Daudsaid/uk-land-registry-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 3,
    title: "Fintech Fraud Detection Pipeline",
    description: "Production-grade fraud detection pipeline ingesting 590,540 IEEE-CIS transactions. Features 12 engineered fraud signals, rule-based scoring (0–100), Apache Kafka streaming for real-time alerts, dbt models (6/6 tests passing), and end-to-end Airflow orchestration — all Dockerised.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "Apache Kafka", "dbt", "PostgreSQL", "Airflow", "Docker"],
    github: "https://github.com/Daudsaid/fintech-fraud-detection-pipeline-bydaud",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 4,
    title: "Crypto Stream Pipeline",
    description: "Real-time streaming pipeline ingesting live BTC/ETH price ticks from the Binance WebSocket API through Apache Kafka into PostgreSQL. dbt models produce 1-minute OHLC candlesticks and rolling volatility metrics.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "Apache Kafka", "dbt", "PostgreSQL", "Docker", "WebSocket"],
    github: "https://github.com/Daudsaid/crypto-stream-pipeline-bydaud",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 5,
    title: "UK Labour Stress Pipeline",
    description: "Databricks-native pipeline ingesting ONS regional labour market data and producing a composite stress score index across UK regions. Uses a medallion architecture (Bronze → Silver → Gold) with PySpark, Delta Lake, and dbt models.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "PySpark", "Databricks", "dbt", "Delta Lake"],
    github: "https://github.com/Daudsaid/uk-labour-stress-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 6,
    title: "BoE Stats Pipeline",
    description: "Data pipeline extracting macroeconomic series from the Bank of England IADB API — base rate, GBP/USD, GBP/EUR, mortgage rates, and M4 money supply. dbt project with 14/14 passing tests, staging and mart layers, orchestrated via Airflow.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "dbt", "PostgreSQL", "Airflow", "Docker"],
    github: "https://github.com/Daudsaid/boe-stats-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 7,
    title: "FCA Register Pipeline",
    description: "End-to-end data pipeline ingesting the UK FCA financial services register. Features SCD Type 2 snapshots, dbt models and tests (12/12 passing), and dual-target deployment to both local PostgreSQL and Snowflake.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "dbt", "Snowflake", "PostgreSQL", "Docker", "Airflow"],
    github: "https://github.com/Daudsaid/fca-register-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 8,
    title: "UK Crime Pipeline",
    description: "Batch data pipeline extracting 17,000+ crime records from the UK Police API. Stores data as Parquet, loads to PostgreSQL, and extends to AWS with S3, Glue, and Athena for cloud analytics.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "dbt", "PostgreSQL", "AWS S3", "AWS Glue", "Athena", "Parquet"],
    github: "https://github.com/Daudsaid/uk-crime-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },

  // ── Recent Projects (synced from GitHub, newest first) ────────────────────
  // NOTE: descriptions below marked "inferred" are the author's own guess from
  // the repo name, not a confirmed tech-stack/summary — verify before publishing.
  {
    id: 9,
    title: "Premier League Pipeline 26/27",
    description: "Season 26/27 Premier League data pipeline.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "Private"],
    github: null,
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 10,
    title: "Premier League Pipeline",
    // inferred from repo name — verify
    description: "Premier League match data pipeline: ingestion, cleaning, and analysis.",
    image: "/api-placeholder.jpg",
    tags: ["Python"],
    github: "https://github.com/Daudsaid/premier-league-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 11,
    title: "UK Trade Pipeline",
    // inferred from repo name — verify
    description: "ETL and analysis of UK import/export trade data.",
    image: "/api-placeholder.jpg",
    tags: ["Jupyter Notebook"],
    github: "https://github.com/Daudsaid/uk-trade-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 12,
    title: "Realtime Flight Tracker",
    description: "Real-time flight tracking pipeline: OpenSky API → Kafka → Postgres → Streamlit.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "OpenSky API", "Kafka", "Postgres", "Streamlit"],
    github: "https://github.com/Daudsaid/realtime-flight-tracker",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 13,
    title: "NHS A&E ELT",
    // inferred from repo name — verify
    description: "ELT pipeline for NHS A&E attendance and waiting-time data.",
    image: "/api-placeholder.jpg",
    tags: ["Jupyter Notebook"],
    github: "https://github.com/Daudsaid/nhs-ae-elt",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 14,
    title: "UK Energy Pipeline",
    // inferred from repo name — verify
    description: "Pipeline for UK energy generation and consumption data.",
    image: "/api-placeholder.jpg",
    tags: ["Python"],
    github: "https://github.com/Daudsaid/uk-energy-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
];
