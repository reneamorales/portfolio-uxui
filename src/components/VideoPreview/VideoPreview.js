import React from "react";
import './VideoPreview.css';

const VideoPreview = ({ videoSrc, caption }) => {
    return (
        <figure className="video-preview">
            <video autoPlay muted loop playsInline className="project-video">
                <source src={videoSrc} type="video/mp4" />
            </video>
            <figcaption>{caption}</figcaption>
        </figure>
    );
};

export default VideoPreview;
