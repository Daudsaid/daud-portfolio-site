import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daud Abdi | Associate Data Engineer',
  description: 'Associate Data Engineer building ETL pipelines with Python, pandas, and SQL — from raw data ingestion through to clean, tested datasets ready for analytics.',
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
