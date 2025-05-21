import React, { useEffect } from "react";
import "./Grid.css";
import { Item } from "./Item";
import VideoPreview from "../../../components/VideoPreview/VideoPreview";

export const Grid = ({ content }) => {
  const isVideoOnly =
    content.item?.length === 1 && content.item[0].type === "video";

  useEffect(() => {
    const titles = document.querySelectorAll(".design__process-title");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.target.classList.toggle("active", entry.isIntersecting)
        );
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.5, 1],
      }
    );

    titles.forEach((title) => observer.observe(title));

    return () => {
      titles.forEach((title) => observer.unobserve(title));
      observer.disconnect();
    };
  }, []);

  const renderContentItem = (item, index) => {
    if (item.type === "video") {
      return (
        <VideoPreview
          key={index}
          videoSrc={item.videoSrc}
          caption={item.caption || ""}
          fullWidth={isVideoOnly}
        />
      );
    }

    return (
      <Item
        key={index}
        imageSrc={item.imageSrc}
        subtitle={item.subtitle || ""}
        description={item.description || ""}
        className="image"
      />
    );
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
        <h2 className="design__process-title">{content.title}</h2>

        <div className="design__process-description">
          {content.descriptionTop}
        </div>

        <div className={`grid ${isVideoOnly ? "full-width-video" : ""}`}>
          {content.item?.map((item, index) => renderContentItem(item, index))}
        </div>

        <div className="design__process-description">
          {content.descriptionBottom}
        </div>
      </div>
    </div>
  );
};
