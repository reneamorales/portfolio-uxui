import React from "react";
import "./Grid.css";
import { Item } from "./Item";
import VideoPreview from "../../../components/VideoPreview/VideoPreview";
import { AnimatedSectionTitle } from "../../../components/AnimatedSectionTitle/AnimatedSectionTitle";
import DesignProcessDescription from "../../DesignProcessDescription/DesignProcessDescription";
export const Grid = ({ content }) => {
  const isVideoOnly =
    content.item?.length === 1 && content.item[0].type === "video";

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
        <AnimatedSectionTitle className="section__subtitle">
          {content.title}
        </AnimatedSectionTitle>

        {content.descriptionTop && (
          <DesignProcessDescription>
            {content.descriptionTop}
          </DesignProcessDescription>
        )}

        <div className={`grid ${isVideoOnly ? "full-width-video" : ""}`}>
          {content.item?.map((item, index) => renderContentItem(item, index))}
        </div>

        {content.descriptionBottom && (
          <DesignProcessDescription>
            {content.descriptionBottom}
          </DesignProcessDescription>
        )}
      </div>
    </div>
  );
};
