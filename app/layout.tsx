import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daud Abdi | Associate Data Engineer',
  description: 'Associate Data Engineer in London building batch and streaming pipelines with Python, SQL, dbt, Airflow, Kafka, PySpark and Delta Lake — reconciled, tested and shipped with CI.',
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
