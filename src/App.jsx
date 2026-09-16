import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-brand-white text-brand-ink font-body">
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main>
        <Hero />
        <Profile />
        <Menu />
        <Reviews />
        <Location />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
