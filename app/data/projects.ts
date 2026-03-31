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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
