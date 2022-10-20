import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function renderPage(currentPage) {
  if (currentPage === 'About') {
    return <About />
  }
  if (currentPage === 'Contact') {
    return <Contact />
  }
  if (currentPage === 'Portfolio') {
    return <Portfolio />
  }
  if (currentPage === 'Resume') {
    return <Resume />
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState
  ('About');
  return (
  <div>
    <nav>
      <a onClick={() => setCurrentPage('About')}
      >
        About
      </a>
      <a onClick={() => setCurrentPage('Contact')}
      >
        Contact
      </a>
      <a onClick={() => setCurrentPage('Portfolio')}
      >
        Portfolio
      </a>
      <a onClick={() => setCurrentPage('Resume')}
      >
        Resume
      </a>
    </nav>
    {renderPage(currentPage)}
  </div>
  );
}

export default App;
