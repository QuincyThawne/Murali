import './TopNavbar.css';
import GooeyNav from './GooeyNav';

import { Moon, Sun } from 'lucide-react';

const items = [
  { label: "Home", href: "#about" },
  { label: "About", href: "#about" },
  { label: "Projects", href:"#projects"},
  { label: "Socials", href: "#socials" },
];

export default function TopNavbar({ darkMode, toggleDarkMode }) {
  return (
<header className="top-navbar">
  <div className="nav-left">
    <a href="#" className="logo">Murali Vennapusa</a>
    {/* <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#socials">Socials</a>
    </nav> */}
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


  );
}
