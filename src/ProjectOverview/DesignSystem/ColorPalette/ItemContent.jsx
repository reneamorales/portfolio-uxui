
export const ItemParagraph ={
    title: "Paleta de Colores",
    description: (
        <>
        <p>
Después de analizar la competencia, opté por una paleta de colores vibrante para los elementos principales, como títulos, subtítulos y botones. Para equilibrar visualmente la interfaz, agregué colores secundarios en tonos grises y claros, destinados a fondos y secciones de menor jerarquía. Asimismo, incluí una paleta en versiones claras y oscuras, pensada para mejorar la legibilidad en los textos de los párrafos.
        </p><br/>
        <p>Para añadir dinamismo, incorporé tres gradientes que se usarán en elementos interactivos, como el <strong>hover</strong> de botones y tarjetas, fondos de banners, links de FAQ, tarjetas de testimonios y vectores. Estos gradientes ayudarán a romper la monotonía de la interfaz, haciéndola más atractiva y diferenciada de la competencia.</p>
        </>
    )
}

export const ItemContent = [
    // Primary Colors
    {
        title: "Primary Colors",
        colors: [
            { name: "Orange", hex: "#FF7A00", textClass: "txt-dark" },
            { name: "Green", hex: "#77B728", textClass: "txt-dark" },
            { name: "Cyan", hex: "#79E5DE", textClass: "txt-dark" },
            { name: "Pink", hex: "#DB3BCB", textClass: "txt-dark" },
            { name: "Purple", hex: "#AF32E5", textClass: "txt-dark" },
        ],
    },
    // Background Colors
    {
        title: "Background Colors",
        colors: [
            { name: "Black", hex: "#000000", textClass: "txt-light" },
            { name: "Dark Gray", hex: "#313131", textClass: "txt-light" },
            { name: "Gray", hex: "#232323", textClass:"txt-light"},
            { name: "White", hex: "#FFFFFF", textClass: "txt-dark" },
            { name: "Light Gray", hex: "#FAFAFA", textClass: "txt-dark" },
        ],
    },
    // Text Colors for Descriptions
    {
        title: "Text Colors for Descriptions",
        colors: [
            { name: "White", hex: "#FFFFFF", textClass: "txt-dark" },
            { name: "Light Gray", hex: "#FAFAFA", textClass: "txt-dark" },
            { name: "Gray", hex: "#F0F0F0", textClass: "txt-dark" },
            { name: "Navy", hex: "#07081C", textClass: "txt-light" },
        ],
    },
    // Gradients Colors
    {
        title: "Gradients Colors",
         colors: [
            { hex: "#74EBD5 → #9FACE6", direction: "to left right", textClass: "txt-dark" },
            { hex: "#8EC5FC → #E0C3FC", direction: "to top right", textClass: "txt-dark" },
            { hex: "#74EBD5 → #F7CE68", direction: "to top right", textClass: "txt-dark" }
        ]
    }
];
