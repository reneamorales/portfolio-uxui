import React from "react";
import { Navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { projectData } from "../components/Projects/projectData";
import { Cover } from "../ProjectOverview/Cover/CoverSection";
import { CoreDetails } from "../ProjectOverview/CoreSections/CoreDetails";
import { Grid } from "../ProjectOverview/ProcessDesign/GridWireframes/Grid";
import { MediaGridWithLightbox } from "../ProjectOverview/ProcessDesign/MediaGridWithLightbox/MediaGridWithLightbox";
import { ColorPalette } from "../ProjectOverview/DesignSystem/ColorPalette/ColorPalette";
import { TipographySection } from "../ProjectOverview/DesignSystem/TipographySection/TipographySection";
import { AlternatingProcessGrid } from "../ProjectOverview/ProcessDesign/AlternatingProcessGrid/AlternatingProcessGrid";
import { RedirectionSection } from "../ProjectOverview/Navigation/Redirection/RedirectionSection";
import {
  initialSection,
  designSolutionsContent,
  finalSection,
} from "../ProjectOverview/CoreSections/CoreContent";
import {
  wireframes,
  hiPiPrototype,
  assetsUi,
  keyDisplay,
} from "../ProjectOverview/ProcessDesign/GridWireframes/ItemContent";
import {
  spaces,
  interaction,
} from "../ProjectOverview/ProcessDesign/AlternatingProcessGrid/AlternatingProcessGridContent";

const ProjectDetail = () => {
  const { id } = useParams();

  const projectIndex = parseInt(id, 10);

  // Verificamos si el ID es un número válido y si el proyecto existe
  const isValidIndex =
    !isNaN(projectIndex) &&
    projectIndex >= 0 &&
    projectIndex < projectData.length;

  const selectedProject = projectData.find((p) => p.id === id);

  if (!selectedProject) return <Navigate to="/404" replace />;

  return (
    <main className="project-page" id="main-content">
      <section className="section-cover">
        <Cover />
        {/* Poner dentro de cada comp sec aria-labelledby="wireframes-heading*/}
        <CoreDetails content={initialSection} />
      </section>

      <section className="section-wireframes">
        <Grid content={wireframes} />
      </section>

      <section className="section-hipi">
        <MediaGridWithLightbox content={hiPiPrototype} />
      </section>

      <section className="section-styleguide">
        <ColorPalette />
        <TipographySection />
      </section>

      <section className="section-ui-assets">
        <Grid content={assetsUi} />
      </section>

      <section className="section-interaction">
        <AlternatingProcessGrid content={spaces} />
        <AlternatingProcessGrid content={interaction} />
      </section>

      <section className="section-solutions">
        <CoreDetails content={designSolutionsContent} />
      </section>

      <section className="section-final">
        <Grid content={keyDisplay} />
        <CoreDetails content={finalSection} />
      </section>

      <section className="section-redirection">
        <RedirectionSection />
      </section>
    </main>
  );
};

export default ProjectDetail;
