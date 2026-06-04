export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string | null;
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
  // ── Data Engineering (featured) ──────────────────────────────────────────
  {
    id: 1,
    title: "NHS A&E Waiting List Pipeline",
    description: "End-to-end pipeline ingesting NHS England A&E attendance and waiting time data across 11 months (2,197+ rows). Uses PySpark for transformation, loads into Snowflake, and models with dbt — all orchestrated via Airflow on Docker.",
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
  // ── Backend (not featured) ────────────────────────────────────────────────
  {
    id: 9,
    title: "Payments API with Stripe Integration",
    description: "Production-ready RESTful API with complete Stripe payment processing, secure webhook handling with SHA-256 signature verification, and comprehensive test coverage (38+ passing tests). Features Payment Intents, customer management, refunds, and CSRF protection.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "Stripe", "Jest", "Webhooks"],
    github: "https://github.com/Daudsaid/payments-api-da-ts",
    demo: null,
    featured: false,
    category: "Backend"
  },
  {
    id: 10,
    title: "OAuth Login API",
    description: "Production-ready OAuth authentication API deployed on AWS (EC2 + RDS). Features Google and GitHub login, session management with HttpOnly cookies, CSRF protection, rate limiting, and 24/7 uptime with PM2. Includes 38 passing tests.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "OAuth", "Jest", "AWS", "PM2"],
    github: "https://github.com/Daudsaid/OAuth-Login-API",
    demo: null,
    featured: false,
    category: "Backend"
  },
  {
    id: 11,
    title: "Advanced Authentication & Authorization API",
    description: "Production-ready REST API deployed on AWS (EC2 + RDS PostgreSQL). Features JWT authentication, refresh tokens, email verification, password reset, and 24/7 uptime with PM2. Includes comprehensive test coverage with Jest.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "JWT", "Jest", "AWS", "PM2"],
    github: "https://github.com/Daudsaid/authentication-authorization-api",
    demo: null,
    featured: false,
    category: "Backend"
  },
  {
    id: 12,
    title: "Job Scraper API",
    description: "FastAPI backend that scrapes London Data Engineering and AI job listings from Reed.co.uk, stores them in PostgreSQL, and exposes a queryable REST API with filters, pagination, and aggregated stats (top companies, locations, salary ranges).",
    image: "/api-placeholder.jpg",
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "REST API"],
    github: "https://github.com/Daudsaid/job-scraper-api-bydaud",
    demo: null,
    featured: false,
    category: "Backend"
  },
];
