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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    title: "UK Crime Pipeline",
    description: "Batch data pipeline extracting 17,000+ crime records from the UK Police API. Stores data as Parquet, loads to PostgreSQL, and extends to AWS with S3, Glue, and Athena for cloud analytics.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "dbt", "PostgreSQL", "AWS S3", "AWS Glue", "Athena", "Parquet"],
    github: "https://github.com/Daudsaid/uk-crime-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 7,
    title: "UK Trade Pipeline",
    description: "Airflow-orchestrated pipeline ingesting HMRC trade data via REST API. Dual PostgreSQL instances via Docker Compose, dbt project with 6 models and 10 passing tests.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "dbt", "Airflow", "PostgreSQL", "Docker", "REST API"],
    github: "https://github.com/Daudsaid/uk-trade-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 8,
    title: "TFL Disruptions Pipeline",
    description: "Real-time pipeline polling the TFL API every 60 seconds for live disruption data. Fully Dockerised with dbt models and pushed to GitHub.",
    image: "/api-placeholder.jpg",
    tags: ["Python", "dbt", "PostgreSQL", "Docker", "TFL API"],
    github: "https://github.com/Daudsaid/tfl-disruptions-pipeline",
    demo: null,
    featured: true,
    category: "Data Engineering"
  },
  {
    id: 9,
    title: "Fintech Microservices",
    description: "Production-style fintech backend in Go with three independently deployable microservices — accounts, transactions, and notifications — each with its own PostgreSQL database. Built using Go's standard library only (no frameworks), with Docker Compose orchestration.",
    image: "/api-placeholder.jpg",
    tags: ["Go", "PostgreSQL", "Docker", "Microservices", "REST API"],
    github: "https://github.com/Daudsaid/fintech-microservices-bydaud",
    demo: null,
    featured: true,
    category: "Backend"
  },
  {
    id: 10,
    title: "Job Scraper API",
    description: "FastAPI backend that scrapes London Data Engineering and AI job listings from Reed.co.uk, stores them in PostgreSQL, and exposes a queryable REST API with filters, pagination, and aggregated stats (top companies, locations, salary ranges).",
    image: "/api-placeholder.jpg",
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "REST API"],
    github: "https://github.com/Daudsaid/job-scraper-api-bydaud",
    demo: null,
    featured: true,
    category: "Backend"
  },
  {
    id: 11,
    title: "Payments API with Stripe Integration",
    description: "Production-ready RESTful API with complete Stripe payment processing, secure webhook handling with SHA-256 signature verification, and comprehensive test coverage (38+ passing tests). Features Payment Intents, customer management, refunds, and CSRF protection.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "Stripe", "Jest", "Webhooks"],
    github: "https://github.com/Daudsaid/payments-api-da-ts",
    demo: null,
    featured: true,
    category: "Backend"
  },
  {
    id: 12,
    title: "OAuth Login API",
    description: "Production-ready OAuth authentication API deployed on AWS (EC2 + RDS). Features Google and GitHub login, session management with HttpOnly cookies, CSRF protection, rate limiting, and 24/7 uptime with PM2. Includes 38 passing tests.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "OAuth", "Jest", "AWS", "PM2"],
    github: "https://github.com/Daudsaid/OAuth-Login-API",
    demo: "http://oauth.3.10.174.145.nip.io:5000",
    featured: true,
    category: "Backend"
  },
  {
    id: 13,
    title: "Advanced Authentication & Authorization API",
    description: "Production-ready REST API deployed on AWS (EC2 + RDS PostgreSQL). Features JWT authentication, refresh tokens, email verification, password reset, and 24/7 uptime with PM2. Includes comprehensive test coverage with Jest.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "JWT", "Jest", "AWS", "PM2"],
    github: "https://github.com/Daudsaid/authentication-authorization-api",
    demo: "http://3.10.174.145:4000",
    featured: true,
    category: "Backend"
  },
  {
    id: 14,
    title: "JWT Authentication API (TypeScript)",
    description: "Secure authentication API with JWT tokens, user registration, login, and protected routes. Built with TypeScript for type safety.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "JWT", "bcrypt"],
    github: "https://github.com/Daudsaid/auth-api-typescript",
    demo: null,
    featured: true,
    category: "Backend"
  },
  {
    id: 15,
    title: "JWT Authentication API (JavaScript)",
    description: "RESTful authentication API featuring JWT token-based authentication, bcrypt password hashing, and PostgreSQL database integration.",
    image: "/api-placeholder.jpg",
    tags: ["JavaScript", "Express.js", "PostgreSQL", "JWT", "bcrypt"],
    github: "https://github.com/Daudsaid/auth-api-javascript",
    demo: null,
    featured: true,
    category: "Backend"
  },
  {
    id: 16,
    title: "Budgeting API",
    description: "RESTful API for budget management with full CRUD operations for budgets, income, and expenses tracking.",
    image: "/api-placeholder.jpg",
    tags: ["JavaScript", "Express.js", "PostgreSQL"],
    github: "https://github.com/Daudsaid/budgeting-api",
    demo: null,
    featured: false,
    category: "Backend"
  },
  {
    id: 17,
    title: "Expense Tracker API",
    description: "Backend API for tracking expenses with category management and full CRUD functionality.",
    image: "/api-placeholder.jpg",
    tags: ["JavaScript", "Express.js", "PostgreSQL"],
    github: "https://github.com/Daudsaid/expense-tracker-api",
    demo: null,
    featured: false,
    category: "Backend"
  },
  {
    id: 18,
    title: "TypeScript by Example",
    description: "Interactive learning resource for mastering TypeScript through practical, hands-on examples. Covers core concepts, type system, generics, and advanced patterns with live code demonstrations.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "JavaScript", "Education"],
    github: "https://github.com/Daudsaid/typescript-by-example",
    demo: "https://tsc-by-example.vercel.app",
    featured: true,
    category: "Frontend"
  },
  {
    id: 19,
    title: "E-Commerce Store",
    description: "Full-featured e-commerce application with product browsing, shopping cart, user authentication, and checkout functionality. Built with modern React patterns and responsive design.",
    image: "/api-placeholder.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "E-Commerce"],
    github: "https://github.com/Daudsaid/ecommerce-daud",
    demo: "https://ecomerce-daud-z9gs.vercel.app",
    featured: true,
    category: "Frontend"
  },
  {
    id: 20,
    title: "Daudflix",
    description: "Netflix clone featuring user authentication, movie browsing, and streaming UI. Includes responsive design, dynamic content loading, and modern user interface inspired by Netflix.",
    image: "/api-placeholder.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Daudsaid/daudflix",
    demo: "https://daudflix.vercel.app",
    featured: true,
    category: "Frontend"
  }
];