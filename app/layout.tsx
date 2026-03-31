import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daud Abdi | Backend & Data Engineer',
  description: 'Backend & Data Engineer building production-grade data pipelines and backend systems — from ingestion to analytics — using Python, dbt, Airflow, Snowflake, and SQL, with a full-stack TypeScript background.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
