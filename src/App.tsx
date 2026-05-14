import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import BasicStudentTraining from './pages/BasicStudentTraining';
import CorporateFleetTraining from './pages/CorporateFleetTraining';
import MedicalSafetyAudit from './pages/MedicalSafetyAudit';
import LicenseSupport from './pages/LicenseSupport';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/basic-student-training" element={<BasicStudentTraining />} />
        <Route path="/corporate-fleet-training" element={<CorporateFleetTraining />} />
        <Route path="/medical-safety-audit" element={<MedicalSafetyAudit />} />
        <Route path="/license-support" element={<LicenseSupport />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
