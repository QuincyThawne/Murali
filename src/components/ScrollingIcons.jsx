// src/components/ScrollingIcons.jsx
import { Typewriter } from 'react-simple-typewriter';
import React from "react";
import "./ScrollingIcons.css";

// 🛠️ Tech Icons (from /src/assets/icons/)
import vscode from "../assets/icons/vscode.png";
import python from "../assets/icons/python.png";
import streamlit from "../assets/icons/streamlit.png";
import react from "../assets/icons/react.svg";
import vite from "../assets/icons/vite.svg";
import postman from "../assets/icons/postman.svg";
import api from "../assets/icons/api.png";

// 🎮 Hobby Icons
import reddit from "../assets/icons/reddit.svg";
import tekken from "../assets/icons/tekken.png";
import pokemonunite from "../assets/icons/pokemonunite.png";
import film from "../assets/icons/profile.png";
import manga from "../assets/icons/manga.png";
import typeracer from "../assets/icons/typeracer.png";
import monkeytype from "../assets/icons/monkeytype.png";

const ScrollingIcons = () => {
  const techIcons = [
    { src: vscode, alt: "VSCode" },
    { src: python, alt: "Python" },
    { src: streamlit, alt: "Streamlit" },
    { src: react, alt: "React" },
    { src: vite, alt: "Vite" },
    { src: postman, alt: "Postman" },
    { src: api, alt: "api" },
  ];

  const hobbyIcons = [
    { src: tekken, alt: "Tekken 8" },
    { src: pokemonunite, alt: "Pokemon Unite" },
    { src: film, alt: "Film" },
    { src: manga, alt: "Manga" },
    { src: typeracer, alt: "TypeRacer" },
    { src: monkeytype, alt: "Monkeytype" },
    { src: reddit, alt: "Reddit"}, 
  ];

  const renderScrollRow = (items, className) => (
    <div className={`scrolling-row ${className}`}>
      <div className="scrolling-track">
        {items.concat(items).map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.alt} className="icon" />
        ))}
      </div>
    </div>
  );

  return (
    <div id="tech">
    <div className="scrolling-icons-container">
      <h1>What I Use ...</h1>
      {renderScrollRow(techIcons, "tech")}
        <h3 className="epithets">
            <Typewriter
            words={['My Tech Stack','']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            />
        </h3>

      <br />
      <h1>What I Do ...</h1>
      {renderScrollRow(hobbyIcons, "hobby")}
        <h3 className="epithets">
            <Typewriter
            words={['My Hobbies','']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            />
        </h3>
    </div>
  </div>
  );
};

export default ScrollingIcons;
