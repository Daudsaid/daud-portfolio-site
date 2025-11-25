import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Daud Abdi | Golang Backend Developer',
  description: 'Portfolio website for Daud Abdi, Golang backend developer building APIs, microservices, and full-stack apps.',
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
