import React from "react";
import { DownloadCv } from "./DownloadCv";
import './Hero.css';

export const Hero = () => {

    return (
        <div className="hero-section">
            <div className="animated-card">
                <h1 className="hero-title">
                    <span className="hero-word">¡Hola</span>
                    <span className="hero-word">Soy</span>
                    <span className="hero-word">René</span>
                    <span className="hero-word">UX UI</span>
                    <span className="hero-word">Designer!</span>
                </h1>
                <div className="container-description-btn">
                    <p className="typewriter-effect">
                        <span className="typewriter-word">Descubre</span>
                        <span className="typewriter-word">cómo</span>
                        <span className="typewriter-word">la</span>
                        <span className="typewriter-word">tecnología</span>
                        <span className="typewriter-word">transforma</span>
                        <span className="typewriter-word">el</span>
                        <span className="typewriter-word">mundo,</span>
                        <span className="typewriter-word">palabra</span>
                        <span className="typewriter-word">por</span>
                        <span className="typewriter-word">palabra.</span>
                    </p>
                    <DownloadCv />
                </div>

            </div>
        </div>
    );
};