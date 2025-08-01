import { useState, useEffect } from 'react';
import Loader from './components/loader';
import TargetCursor from './components/TargetCursor';
import TopNavbar from './components/TopNavbar';
import About from './components/About';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Footer from './components/Footer';
import Starfield from './components/Starfield';
import Hyperspeed from './components/Hyperspeed';
import ScrollingIcons from "./components/ScrollingIcons";
import AOS from 'aos';
import './index.css';



function App() {
  const [darkMode, setDarkMode] = useState(true);
  

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);
  
  useEffect(() => {
  const triggerHyperspace = () => {
    setHyperspace(true);
    setTimeout(() => setHyperspace(false), 1000);
  };

  const handleScroll = () => {
    triggerHyperspace();
  };

  const handleClick = () => {
    triggerHyperspace();
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('click', handleClick);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('click', handleClick);
  };
}, []);

  const [hovered, setHovered] = useState(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="app">
    <>
      {/* {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded} */}
{
darkMode &&
            <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
    }    </>
      <Starfield darkMode={darkMode} />
      <TopNavbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      {/* Render Hyperspeed only in dark mode */}
      {darkMode && (
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      )}

      <About />
      <ScrollingIcons />
      <Projects />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
