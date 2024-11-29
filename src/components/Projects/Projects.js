import Card from '../CardProjects/Card';
import './Projects.css';

export const Projects = () => {
    const projectData = [
        {
            title: 'Ecommerce de Carpintería Personalizada',
            description: 'Proyecto de ecommerce de carpintería diseñado para optimizar la experiencia del usuario. Desarrollado con un enfoque en la funcionalidad y un diseño responsive, este sitio integra filtros inteligentes, transiciones suaves y una navegación intuitiva. ¡Descubre los detalles de este desarrollo!',
            videoSrc: '/resources/video/cranbelo-gif.mp4', 
            // Esta es la ruta que debes asegurarte que funcione
            webLink: 'proyecto1-detalle.html',
            projectLink: 'proyecto1-detalle.html',
            caption: 'Vista previa del proyecto 1'
        },
        {
            title: 'Otro proyecto increíble',
            description: 'Proyecto de ecommerce de carpintería diseñado para optimizar la experiencia del usuario. Desarrollado con un enfoque en la funcionalidad y un diseño responsive, este sitio integra filtros inteligentes, transiciones suaves y una navegación intuitiva. ¡Descubre los detalles de este desarrollo!',
            videoSrc: '/resources/video/cranbelo-gif.mp4', 
            webLink: 'proyecto2-detalle.html',
            projectLink: 'proyecto2-detalle.html',
            caption: 'Vista previa del proyecto 2'
        },
        {
            title: 'Ecommerce de Carpintería Personalizada',
            description: 'Proyecto de ecommerce de carpintería diseñado para optimizar la experiencia del usuario. Desarrollado con un enfoque en la funcionalidad y un diseño responsive, este sitio integra filtros inteligentes, transiciones suaves y una navegación intuitiva. ¡Descubre los detalles de este desarrollo!.',
            videoSrc: '/resources/video/cranbelo-gif.mp4', 
            // Esta es la ruta que debes asegurarte que funcione
            webLink: 'proyecto1-detalle.html',
            projectLink: 'proyecto1-detalle.html',
            caption: 'Vista previa del proyecto 1'
        }
    ];

    return (
        <section id="projects">
            <div className="projects-container">
                <h2 className="section-title">Proyectos</h2>
                <div className="projects-list">
                    {projectData.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            description={project.description}
                            videoSrc={project.videoSrc}
                            webLink={project.webLink}
                            projectLink={project.projectLink}
                            caption={project.caption}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
