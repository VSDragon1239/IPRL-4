import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import Templates from './pages/Templates';
import Training from './pages/Training';
import Achievements from './pages/Achievements';
import Profile from './pages/Profile';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Sidebar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/templates" element={<Templates />} />
                        <Route path="/training" element={<Training />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
