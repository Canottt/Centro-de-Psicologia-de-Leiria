/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Specialties from './pages/Specialties';
import Interventions from './pages/Interventions';
import Facilities from './pages/Facilities';
import Protocols from './pages/Protocols';
import Appointments from './pages/Appointments';
import OnlineClinic from './pages/OnlineClinic';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CookiePolicy from './pages/CookiePolicy';
import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/equipa" element={<Team />} />
          <Route path="/especialidades" element={<Specialties />} />
          <Route path="/intervencoes" element={<Interventions />} />
          <Route path="/instalacoes" element={<Facilities />} />
          <Route path="/protocolos" element={<Protocols />} />
          <Route path="/marcacoes" element={<Appointments />} />
          <Route path="/clinica-online" element={<OnlineClinic />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-condicoes" element={<TermsAndConditions />} />
          <Route path="/politica-cookies" element={<CookiePolicy />} />
        </Routes>
      </Layout>
      <CookieBanner />
    </Router>
  );
}
