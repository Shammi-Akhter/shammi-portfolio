import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
