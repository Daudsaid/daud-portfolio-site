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
// Descriptions and tags are kept in sync with each repo's GitHub description
// and README, and are duplicated here so the offline fallback still renders.
export const projectOverrides: Record<string, ProjectOverride> = {
  "nhs-ae-elt": {
    order: 1,
    title: "NHS A&E Attendances Pipeline",
    featured: true,
    description: "A monthly ELT pipeline for NHS England's A&E Attendances and Emergency Admissions statistics — extracted from NHS's live website, loaded into Postgres, transformed with dbt, orchestrated by Airflow, visualized in Metabase. Everything runs in Docker.",
    tags: ["Python", "BeautifulSoup", "PostgreSQL", "dbt", "Airflow", "Metabase", "Docker"],
  },
  "land-registry-pipeline": {
    order: 2,
    title: "UK Land Registry Pipeline",
    featured: true,
    description: "An end-to-end ELT pipeline that extracts 5.36 million UK property transactions (2021–2026) from HM Land Registry's Price Paid Data, loads them into PostgreSQL, and transforms them with dbt into a Kimball-style star schema — 22 dbt tests, including relationships tests on every foreign key.",
    tags: ["Python", "PostgreSQL", "dbt", "Polars", "Docker"],
  },
  "fintech-fraud-detection-pipeline-bydaud": {
    order: 3,
    title: "Fintech Fraud Detection Pipeline",
    featured: true,
    description: "Production-grade fraud detection pipeline ingesting 590,540 IEEE-CIS transactions. Features 12 engineered fraud signals, rule-based scoring (0–100), Apache Kafka streaming for real-time alerts, dbt models (6/6 tests passing), and end-to-end Airflow orchestration — all Dockerised.",
    tags: ["Python", "Apache Kafka", "dbt", "PostgreSQL", "Airflow", "Docker"],
  },
  "sanctions-screening-pipeline": {
    order: 4,
    title: "Sanctions Screening Pipeline",
    featured: true,
    description: "Screens Companies House companies and officers against the UK and US sanctions lists, with explainable scores, dbt data quality tests and a measured alert threshold.",
    tags: ["Python", "PostgreSQL", "dbt", "rapidfuzz", "Docker", "GitHub Actions"],
  },
  "fca-register-pipeline": {
    order: 5,
    title: "FCA Register Pipeline",
    featured: true,
    description: "Pipeline tracking FCA-authorised firm status changes over time with dbt SCD Type 2 snapshots, using synthetic data that mirrors the FCA Register schema (500 firms). 12 dbt tests, including a custom test asserting no overlapping snapshot periods, with dual-target deployment to PostgreSQL and Snowflake.",
    tags: ["Python", "dbt", "Snowflake", "PostgreSQL", "Docker"],
  },
  "realtime-crypto-lakehouse": {
    order: 6,
    title: "Real-time Crypto Lakehouse",
    description: "Real-time crypto market-data lakehouse: Binance → Kafka → Spark Structured Streaming → Delta Lake medallion → Postgres → Metabase. Databricks-ready.",
    tags: ["Python", "Apache Kafka", "PySpark", "Delta Lake", "PostgreSQL", "Metabase", "Docker"],
  },
  "uk-labour-stress-pipeline": {
    order: 7,
    title: "UK Labour Stress Pipeline",
    description: "Databricks-native pipeline ingesting ONS regional labour market data and producing a composite stress score index across UK regions. Uses a medallion architecture (Bronze → Silver → Gold) with PySpark, Delta Lake, and dbt models.",
    tags: ["Python", "PySpark", "Databricks", "dbt", "Delta Lake"],
  },
  "boe-stats-pipeline": {
    order: 8,
    title: "BoE Stats Pipeline",
    description: "Data pipeline extracting macroeconomic series from the Bank of England IADB API — base rate, GBP/USD, GBP/EUR, mortgage rates, and M4 money supply. dbt project with 14/14 passing tests, staging and mart layers, orchestrated via Airflow.",
    tags: ["Python", "dbt", "PostgreSQL", "Airflow", "Docker"],
  },
  "uk-energy-pipeline": {
    order: 9,
    title: "UK Energy Pipeline",
    description: "An end-to-end data pipeline that ingests live UK electricity generation and regional carbon intensity data, models it into a dimensional warehouse using dbt, and orchestrates ingestion with Airflow.",
    tags: ["Python", "Airflow", "PostgreSQL", "dbt", "Metabase", "Docker"],
  },
  "uk-trade-pipeline": {
    order: 10,
    title: "UK Trade Pipeline",
    description: "ELT pipeline that ingests real UK international trade statistics (Overseas Trade Statistics / OTS) from HMRC's public API, lands it raw in Postgres, and models it into a tested star schema with dbt.",
    tags: ["Python", "PostgreSQL", "dbt", "Docker", "GitHub Actions"],
  },
  "premier-league-pipeline-2627": {
    order: 11,
    title: "Premier League Pipeline 2026/27",
    description: "A production-style batch ETL pipeline that fetches Premier League 2026/27 match results and multi-bookmaker betting odds, validates and transforms them, and publishes them into Postgres — fully automated, running twice a week without manual intervention for the length of the season.",
    tags: ["Python", "PostgreSQL", "SQLAlchemy", "Pydantic", "Pandas", "GitHub Actions"],
  },
  "uk-crime-pipeline": {
    order: 12,
    title: "UK Crime Pipeline",
    description: "End-to-end pipeline that ingests crime data from the UK Police API with Python, cleans it with pandas, loads it into PostgreSQL and models it with dbt into staging and mart layers — scheduled daily with Airflow in Docker.",
    tags: ["Python", "Pandas", "PostgreSQL", "dbt", "Airflow", "Docker"],
  },
  "realtime-flight-tracker": {
    order: 13,
    description: "Real-time flight tracking pipeline: OpenSky API → Kafka → Postgres → Streamlit.",
    tags: ["Python", "OpenSky API", "Apache Kafka", "PostgreSQL", "Streamlit"],
  },
  "daud-chatbot": {
    order: 14,
    title: "Daud Chatbot",
    category: "AI / Apps",
    description: "Streaming AI chatbot built in pure Python with Streamlit and SQLite: multiple chats, custom personalities, switchable OpenAI-compatible providers (Gemini, Ollama, OpenAI), and a rate-limited public demo.",
    tags: ["Python", "Streamlit", "SQLite", "OpenAI API"],
    demo: "https://daud-chatbot.streamlit.app",
  },
};
