import portfolio from './images/portfolio.png';
import mangagari from './images/mangagari.jpeg';
import onepiece from './images/onepiece.jpeg';
import unilang from './images/unilang.jpeg';
import citizen from './images/citizen.jpg';
import emo from './images/emo.png';
import mirus from './images/mirus.png';
import favchars from './images/favChars.png';

import './Projects.css';

function Projects() {
const projects = [
  {
    title: 'Portfolio Website',
    image: portfolio,
    description: 'A sleek personal portfolio built using React, Vite, and Tailwind CSS with dark mode and interactive animations.',
    tech: ['React', 'Vite'],
    link: 'https://github.com/muralivennapusa/portfolio'
  },
  {
    title: 'UniLang',
    image:unilang,
    description: 'A multilingual NLP system that answers user queries using translation and real-time processing.',
    tech: ['NLP', 'Python','AIML API', 'Flask'],
    link: 'https://github.com/muralivennapusa/UniLang'
  },
  {
    title: 'Project Citizen',
    image: citizen,
    description: 'Cybercrime classification tool that analyzes citizen complaints using machine learning.',
    tech: ['Python', 'AIML API', 'streamlit'],
    link: 'https://github.com/muralivennapusa/Cyber-Project-v2'
  },
  {
    title: 'Mirus',
    image: mirus,
    description: 'A VirusTotal-powered threat scanner that checks files and URLs for malicious indicators.',
    tech: ['VirusTotal API', 'Python'],
    link: 'https://github.com/muralivennapusa/Mirus'
  },
  {
    title: 'Manga Gari',
    image: mangagari,
    description: 'Web scraper that extracts manga chapters and converts them to downloadable PDFs.',
    tech: ['Python', 'BeautifulSoup', 'PIL'],
    link: 'https://github.com/muralivennapusa/Manga-Gari'
  },
  {
    title: 'Project OnePiece',
    image: onepiece,
    description: 'Scrapes One Piece episode summaries and converts them into narrated audio files.',
    tech: ['Python', 'Web Scraping', "pyttsx3"],
    link: 'https://github.com/muralivennapusa/Project-OnePiece'
  },
  {
    title: 'Project Emo',
    image: emo,
    description: 'Emotion analysis tool designed to assist law enforcement by providing emotional context from statements.',
    tech: ['Python', 'NLP', 'Sentiment Analysis'],
    link: '#'
  },
  {
    title: 'Fav Chars',
    image: favchars,
    description: 'Tribute site to my favorite anime and fictional characters with interactive UI.',
    tech: ['React', 'Vite', 'Custom Loader'],
    link: 'https://fav-chars.vercel.app'
  }
];


  return (
    <div id="projects" className="projects-section">
      <h1 className="projects-title">Works of Mine ...</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-card"
            onClick={() => window.open(project.link, '_blank')}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
