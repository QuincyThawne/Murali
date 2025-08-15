// src/components/ScrollingIcons.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import "./ScrollingIcons.css";

// 🛠️ Tech Icons (from /src/assets/icons/)
import vscode from "../assets/icons/vscode.png";
import python from "../assets/icons/python.png";
import streamlit from "../assets/icons/streamlit.svg";
import react from "../assets/icons/react.svg";
import vite from "../assets/icons/vite.svg";
import postman from "../assets/icons/postman.svg";
import flask from "../assets/icons/flask.png";

// 🎮 Hobby Icons
import reddit from "../assets/icons/reddit.png";
import tekken from "../assets/icons/tekken.png";
import pokemonunite from "../assets/icons/pokemonunite.png";
import WebSurfing from "../assets/icons/profile.png";
import manga from "../assets/icons/manga.png";
import typeracer from "../assets/icons/typeracer.png";
import monkeytype from "../assets/icons/monkeytype.png";

const techIcons = [
  { src: vscode, alt: "VSCode" },
  { src: python, alt: "Python" },
  { src: streamlit, alt: "Streamlit" },
  { src: react, alt: "React" },
  { src: vite, alt: "Vite" },
  { src: postman, alt: "Postman" },
  { src: flask, alt: "Flask" }
];

const hobbyIcons = [
  { src: tekken, alt: "Tekken 8" },
  { src: pokemonunite, alt: "Pokemon Unite" },
  { src: WebSurfing, alt: "Web Surfing" },
  { src: manga, alt: "Manga" },
  { src: typeracer, alt: "TypeRacer" },
  { src: monkeytype, alt: "Monkeytype" },
  { src: reddit, alt: "Reddit" }
];

function Arrow({ className, style, onClick, label }) {
  return (
    <button
      aria-label={label}
      className={`${className} icon-arrow`}
      style={{ ...style }}
      onClick={onClick}
      type="button"
    />
  );
}

function IconCard({ item }) {
  return (
    <div className="icon-card" tabIndex={0} role="group" aria-label={item.alt}>
      <div className="icon-media">
        <img src={item.src} alt={item.alt} loading="lazy" />
      </div>
      <div className="icon-title">{item.alt}</div>
    </div>
  );
}

const sliderSettings = {
  infinite: true,
  speed: 2000, // slower = smoother
  slidesToShow: 7, // ✅ fit more cards
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true, // ✅ optional
  autoplaySpeed: 0, // makes it continuous
  cssEase: "linear", // ✅ smooth flow
  swipeToSlide: true,
  arrows: false, // optional to hide arrows
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};


export default function ScrollingIcons() {
  return (
    <div id="about">
      <div className="carousel-wrap">
        <h1>What I Use ...</h1>
        <div className="carousel-section" aria-label="Tech stack carousel">
          <Slider {...sliderSettings}>
            {techIcons.map((it, i) => (
              <div key={`tech-${i}`} className="slide-cell">
                <IconCard item={it} />
              </div>
            ))}
          </Slider>
        </div>
        <h3 className="epithets">
          <Typewriter
            words={["My Tech Stack", ""]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>

        <h1 style={{ marginTop: "80px" }}>What I Do ...</h1>
        <div className="carousel-section" aria-label="Hobbies carousel">
          <Slider {...sliderSettings}>
            {hobbyIcons.map((it, i) => (
              <div key={`hobby-${i}`} className="slide-cell">
                <IconCard item={it} />
              </div>
            ))}
          </Slider>
        </div>
        <h3 className="epithets">
          <Typewriter
            words={["My Hobbies", ""]}
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
}
