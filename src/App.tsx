import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Transparency from './pages/Transparency';
import GabineteDoPovo from './pages/GabineteDoPovo';
import Agenda from './pages/Agenda';
import Participate from './pages/Participate';

// Global styles
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/transparencia" element={<Transparency />} />
          <Route path="/gabinete-do-povo" element={<GabineteDoPovo />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/participe" element={<Participate />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

