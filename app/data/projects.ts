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

// Only public repos are listed: private ones would link to a 404.
// Repos listed here are always shown. Any other repo appears only if it has
// the GitHub topic 'portfolio'. Overrides win over GitHub metadata.
// Descriptions and tags are kept in sync with each repo's GitHub description
// and README, and are duplicated here so the offline fallback still renders.
export const projectOverrides: Record<string, ProjectOverride> = {
  "london-crime-lakehouse": {
    order: 1,
    title: "London Crime Lakehouse",
    featured: true,
    description: "Medallion lakehouse over 36 months of Metropolitan and City of London Police street-crime data (3.44M rows), modelled into a star schema with 5 dimensions, a fact table and 5 marts, and served to a live dashboard covering all 33 boroughs. Every run reconciles kept, deduplicated, superseded and quarantined rows back to the bronze count, with 200+ tests in CI.",
    tags: ["Python", "PySpark", "Delta Lake", "pytest", "GitHub Actions", "Streamlit"],
    demo: "https://london-crime-lakehouse.streamlit.app/",
  },
  "sanctions-screening-pipeline": {
    order: 2,
    title: "Sanctions Screening Pipeline",
    featured: true,
    description: "Screens 5,406 Companies House fund managers and ~11,000 officers against 23,271 merged UK (FCDO) and US (OFAC) sanctioned parties, with explainable 0–100 scores from rarity-weighted name matching, birth date and nationality. The alert threshold was set from a planted-match evaluation: 93–96% recall with only 30 alerts across ~16,400 subjects. 83 dbt tests and 114 pytest tests in CI.",
    tags: ["Python", "PostgreSQL", "dbt", "rapidfuzz", "Docker", "GitHub Actions"],
  },
  "realtime-crypto-lakehouse": {
    order: 3,
    title: "Real-time Crypto Lakehouse",
    featured: true,
    description: "Streams live Binance trades through Kafka into a bronze/silver/gold Delta Lake medallion, producing 1-minute OHLC candles and volatility served to Postgres via Change Data Feed. Verified across 762K trades: 0 offset gaps, 0 duplicates, and 198 of 202 candles matching Binance's official klines. Quarantine rules are compiled from a YAML data contract, and it runs on Databricks by config switch.",
    tags: ["Python", "Apache Kafka", "PySpark", "Delta Lake", "PostgreSQL", "Metabase", "Docker"],
  },
  "tfl-disruptions-lakehouse": {
    order: 4,
    title: "TfL Disruptions Lakehouse",
    featured: true,
    description: "Polls London Underground line status every minute into Kafka and a Delta Lake medallion, deriving status changes and disruption episodes (gaps-and-islands) for a live dashboard — with idempotent MERGE dedupe, quarantine plus dead-letter queue, and atomic serving-table swaps. Separates planned from unplanned disruption: one line at 16.7% \"good service\" was 68.2% free of unplanned disruption. Spark tests (chispa) in CI.",
    tags: ["Python", "Apache Kafka", "PySpark", "Delta Lake", "PostgreSQL", "Streamlit", "Docker"],
  },
  "premier-league-pipeline-2627": {
    order: 5,
    title: "Premier League Pipeline 2026/27",
    featured: true,
    description: "Production batch ETL running unattended twice a week through the 2026/27 season (GitHub Actions to Neon Postgres) on match results and multi-bookmaker odds. Write-Audit-Publish: data is staged and audited before idempotent upserts into production, and bad rows are dead-lettered. 26 tests in CI.",
    tags: ["Python", "PostgreSQL", "Pydantic", "Alembic", "SQLAlchemy", "Pandas", "GitHub Actions"],
  },
  "nhs-ae-elt": {
    order: 6,
    title: "NHS A&E Attendances Pipeline",
    featured: true,
    description: "Monthly Airflow-orchestrated ELT for NHS England's A&E attendance data (Jan 2022 to present), scraped from NHS's live website and feeding Metabase dashboards. An audit of all 54 source files found 5 inconsistent spellings of aggregate rows, non-standard date formats, and 16 genuine provider renames versus 22 closures — every finding is encoded as a dbt test. Everything runs in Docker.",
    tags: ["Python", "BeautifulSoup", "PostgreSQL", "dbt", "Airflow", "Metabase", "Docker"],
  },
  "land-registry-pipeline": {
    order: 7,
    title: "UK Land Registry Pipeline",
    featured: true,
    description: "ELT over 5.36M HM Land Registry transactions (2021–2026) into a Kimball star schema with 22 dbt tests, including relationships tests on every foreign key. Duplicate source IDs are resolved with window functions, and fixing a slow client-side COPY cut a 3+ minute bulk load to ~1.3 seconds.",
    tags: ["Python", "PostgreSQL", "dbt", "Polars", "Docker"],
  },
  "uk-trade-pipeline": {
    order: 8,
    title: "UK Trade Pipeline",
    description: "ELT pipeline that ingests UK international trade statistics (Overseas Trade Statistics / OTS) from HMRC's public API — 2.6M rows — lands them raw in Postgres, and models them into a star schema with 33 dbt tests.",
    tags: ["Python", "PostgreSQL", "dbt", "Docker", "GitHub Actions"],
  },
  "realtime-flight-tracker": {
    order: 9,
    title: "Live Flight Tracker",
    description: "Real-time flight tracking pipeline: OpenSky API → Kafka (KRaft mode) → PostgreSQL → Streamlit map.",
    tags: ["Python", "OpenSky API", "Apache Kafka", "PostgreSQL", "Streamlit"],
  },
  "uk-energy-pipeline": {
    order: 10,
    title: "UK Energy Pipeline",
    description: "An end-to-end data pipeline that ingests live UK electricity generation and regional carbon intensity data, models it into a dimensional warehouse using dbt, and orchestrates ingestion with Airflow.",
    tags: ["Python", "Airflow", "PostgreSQL", "dbt", "Metabase", "Docker"],
  },
  "daud-chatbot": {
    order: 11,
    title: "Daud Chatbot",
    category: "AI / Apps",
    description: "Streaming AI chatbot built in pure Python with Streamlit and SQLite: multiple chats, custom personalities, switchable OpenAI-compatible providers (Gemini, Ollama, OpenAI), and a rate-limited public demo.",
    tags: ["Python", "Streamlit", "SQLite", "OpenAI API"],
    demo: "https://daud-chatbot.streamlit.app",
  },
};
