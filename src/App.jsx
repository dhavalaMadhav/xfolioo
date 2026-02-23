import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import People from './pages/People';
import Workshops from './pages/Workshops';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Privacy from './pages/Privacy';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<People />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
