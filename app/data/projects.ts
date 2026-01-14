export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string | null;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "OAuth Login API",
    description: "Production-ready OAuth authentication API with Google and GitHub login support. Features session management with HttpOnly cookies, CSRF protection, rate limiting, and comprehensive test coverage with 38 passing tests.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "OAuth", "Jest", "Passport.js"],
    github: "https://github.com/Daudsaid/OAuth-Login-API",
    demo: null,
    featured: true
  },
  {
    id: 2,
    title: "Advanced Authentication & Authorization API",
    description: "Production-ready REST API with JWT authentication, refresh tokens, RBAC, email verification, and password reset. Includes comprehensive test coverage with Jest.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "JWT", "Jest", "bcrypt"],
    github: "https://github.com/Daudsaid/authentication-authorization-api",
    demo: null,
    featured: true
  },
  {
    id: 3,
    title: "JWT Authentication API (TypeScript)",
    description: "Secure authentication API with JWT tokens, user registration, login, and protected routes. Built with TypeScript for type safety.",
    image: "/api-placeholder.jpg",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "JWT", "bcrypt"],
    github: "https://github.com/Daudsaid/auth-api-typescript",
    demo: null,
    featured: true
  },
  {
    id: 4,
    title: "JWT Authentication API (JavaScript)",
    description: "RESTful authentication API featuring JWT token-based authentication, bcrypt password hashing, and PostgreSQL database integration.",
    image: "/api-placeholder.jpg",
    tags: ["JavaScript", "Express.js", "PostgreSQL", "JWT", "bcrypt"],
    github: "https://github.com/Daudsaid/auth-api-javascript",
    demo: null,
    featured: true
  },
  {
    id: 5,
    title: "Budgeting API",
    description: "RESTful API for budget management with full CRUD operations for budgets, income, and expenses tracking.",
    image: "/api-placeholder.jpg",
    tags: ["JavaScript", "Express.js", "PostgreSQL"],
    github: "https://github.com/Daudsaid/budgeting-api",
    demo: null,
    featured: false
  },
  {
    id: 6,
    title: "Expense Tracker API",
    description: "Backend API for tracking expenses with category management and full CRUD functionality.",
    image: "/api-placeholder.jpg",
    tags: ["JavaScript", "Express.js", "PostgreSQL"],
    github: "https://github.com/Daudsaid/expense-tracker-api",
    demo: null,
    featured: false
  }
];
