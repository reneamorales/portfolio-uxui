import ejemploImage1 from '../../img/logo-figma.png';
import ejemploImage2 from '../../img/brands/logo-notion.png';
import ejemploImage3 from '../../img/brands/logo-figjam.png';
import ejemploImage4 from '../../img/brands/spline-logo.jpeg';
import ejemploImage5 from '../../img/brands/logo-chatgpt.png';

export const designTools = [
    {
        name: "Figma",
        category: "Ideation",
        image: ejemploImage1,
        alt: "Logo de Figma"
    },
    {
        name: "Notion",
        category: "Ideation",
        image: ejemploImage2,
        alt: "Logo de Notion"
    },
    {
        name: "FigJam",
        category: "Ideation",
        image: ejemploImage3,
        alt: "Logo de Figjam"
    },
    {
        name: "Spline",
        category: "Ideation",
        image: ejemploImage4,
        alt: "Logo de Spline"
    },
    {
        name: "ChatGPT",
        category: "Ideation",
        image: ejemploImage5,
        alt: "Logo de ChatGPT"
    }
];

export const DesignToolItem = ({ image, alt, name, category }) => {
    return (
        <div className="tools">
            <img
                src={image}
                alt={alt}
                className="tool-logo"
            />
            <div className="tool-text">
                <p className="tool-name">{name}</p>
                <p className="tool-category">{category}</p>
            </div>
        </div>
    );
};

