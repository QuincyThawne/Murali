import './TopNavbar.css';
import GooeyNav from './GooeyNav';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href:"#projects"},
  { label: "Socials", href: "#socials" },
];

export default function TopNavbar({ darkMode, toggleDarkMode }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const checkViewport = () => {
      const mobileWidth = 768;
      setIsMobile(window.innerWidth <= mobileWidth);
    };

    // Initial check
    checkViewport();

    // Listen for resize
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <>
      {isMobile && (
        <button 
          className="navbar-toggle"
          onClick={() => setShowMobileNav(!showMobileNav)}
          aria-label={showMobileNav ? "Close menu" : "Open menu"}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      )}
      <header className={`top-navbar ${isMobile ? 'mobile' : ''} ${showMobileNav ? 'show' : ''}`} ref={navRef}>
        <div className="nav-left">
          <a href="#" className="logo">Murali Vennapusa</a>
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
        <div className="theme-toggle">
          <button onClick={toggleDarkMode} className="theme-icon-btn" aria-label="Toggle Theme">
            {darkMode ? <Moon size={22} /> : <Sun size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}
