import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Daud Abdi | TypeScript & Go Software Engineer',
  description: 'Software engineer specializing in TypeScript and Go. Building scalable backend systems, microservices, and full-stack applications with modern architecture and production-grade reliability.',
};

export default function RootLayout({ children }) {
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
