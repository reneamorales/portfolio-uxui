import React from "react";
import SiteMap from "../../img/cranbelo/SiteMap-Cranbelo.png";
import userflowImageDefault from "../../img/cranbelo/Userflow-mobile.png";

export const initialSection = {
  intro: {
    title: "Intro del Proyecto",
    description:
      "Rediseño del sitio web de Cranbelo, una plataforma educativa orientada a personas interesadas en adquirir habilidades digitales a través de cursos en línea en vivo. Este rediseño busca abordar y resolver problemas clave de usabilidad, redefinir la estructura de negocio, mejorar la Arquitectura de la Información, optimizar el copy y crear una presentación visual más coherente.",
    className: "project-intro",
  },
  roleContext: {
    title: "Mi Rol y Contexto",
    description: (
      <>
        <p>
          <strong>Rol en el proyecto:</strong> Diseñador UX/UI
        </p>
        <p>
          <strong>Plataforma:</strong> Sitio web
        </p>
        <p>
          <strong>Contexto:</strong> Caso de estudio personal basado en
          observaciones propias mientras exploraba el sitio y su potencial de
          mejora.
        </p>
        <p>
          <strong>Tiempo y Alcance:</strong>{" "}
          <u>
            El proyecto duró 8 meses y fue realizado como un caso de estudio
            personal
          </u>
          , enfocado en un público objetivo de jóvenes interesados en
          convertirse en expertos y líderes en habilidades digitales.
        </p>
      </>
    ),
    className: "project-role-context",
  },
  problemObjective: {
    title: "Problemas y Objetivo",
    description: (
      <>
        <p>
          <strong>Desafío de rediseño UX/UI:</strong> En 2023, mientras me
          adentraba más en el uso de Figma, descubrí un video sobre el rediseño
          de la marca Cranbelo.{" "}
          <u>
            Al explorar el sitio, noté de inmediato oportunidades para mejorar
            su usabilidad y presentación.
          </u>
          <br /> El sitio estaba visualmente dominado por un rojo saturado y los
          iconos de navegación resultaban genéricos y redundantes. La
          arquitectura de la información carecía de claridad, y la presentación
          de los cursos e instructores no reflejaba la calidad esperada. También
          identifiqué problemas en la redacción del contenido, que no transmitía
          claramente los valores del negocio.
        </p>
        <br />
        <p>
          <strong>Objetivos:</strong>
        </p>
        <p>
          ☑️ Mejorar la Arquitectura de la Información para facilitar la
          navegación.
        </p>
        <p>☑️ Crear flujos de página más intuitivos y coherentes.</p>
        <p>
          ☑️ Optimizar el copywriting para comunicar con mayor claridad la
          propuesta de valor.
        </p>
        <p>
          ☑️ Redefinir los elementos visuales: paleta de colores, tipografía y
          espaciado, para ofrecer una experiencia de usuario más atractiva y
          funcional.
        </p>
      </>
    ),
    className: "project-problem-objective",
  },
  process: {
    title: "Proceso de Diseño",
    subtitle: "Investigación de Usuarios",
    description: (
      <>
        <p>
          Para el desarrollo de la nueva web, las encuestas cualitativas
          realizadas brindaron una comprensión profunda del público objetivo,
          revelando necesidades, motivaciones, problemas, escenarios y
          características específicas de los usuarios. Esto permitió definir
          tres perfiles distintos, los cuales orientaron las soluciones de
          diseño necesarias para la plataforma.
        </p>
        <br />
        <p>
          Además de las encuestas cualitativas, llevé a cabo una investigación
          exhaustiva de la competencia como parte del proceso de rediseño del
          sitio web de Cranbelo. Este análisis tuvo como objetivo comprender las
          tendencias actuales del mercado, identificar buenas prácticas y evitar
          errores comunes. Para ello, examiné en profundidad los siguientes
          aspectos:
        </p><br/>
        <ul>
          <li>
            <strong>Arquitectura de la información: </strong>Revisé cómo se
            estructuran los contenidos y se distribuyen las secciones, con el
            fin de optimizar la navegación y facilitar la búsqueda de
            información clave para el usuario.
          </li>
          <li>
            <strong>Flujo de Páginas: </strong>Analicé el orden y la secuencia
            de las páginas para mejorar el flujo de navegación y guiar al
            usuario de manera intuitiva desde su ingreso hasta la conversión.
          </li>
          <li>
            <strong>Paleta de Colores y Tipografías: </strong>Evalué las
            elecciones de color y tipografía para asegurar que la estética
            visual sea atractiva y profesional, además de promover la comodidad
            visual durante la navegación.
          </li>

          <li>
            <strong>Elementos Visuales y Estilo: </strong>Estudié el uso de
            iconos, imágenes y otros elementos gráficos para lograr una
            comunicación clara y una identidad visual coherente.
          </li>

          <li>
            <strong>Comunicación y Mensajes Clave: </strong>Observé el tono y el
            estilo de la comunicación en cada sitio, identificando estrategias
            efectivas para transmitir valor y conectar con el público objetivo.
          </li>

        </ul>
      </>
    ),
    className: "project-design-process",
  },
  ia: {
    subtitle: "Arquitectura de la Información",
    imageSrc: SiteMap,
    className: "project-information-arquitecture",
    isSitemap:true
  },
};

export const designSolutionsContent = {
  solutions:{
  title: "Soluciones de Diseño",
  subtitle: "Flujo de Usuario",
  imageSrc: userflowImageDefault,
  description: (
      <>
          <p>
              Este flujo representa la navegación web enfocada en la acción principal del usuario: la adquisición de un curso. A través de este flujo, se ilustran las opciones disponibles en cada paso, desde la exploración y selección del curso hasta la confirmación de la compra. Cada decisión lleva al usuario a distintas secciones clave, optimizando la experiencia de navegación y facilitando el acceso a la información y al proceso de pago.
          </p>
      </>
  ),
  className: "userflow",
  isSitemap:false
  }
};


export const finalSection = {
  challenges: {
    title: "Desafios y Aprendizajes",
    description: (
      <><p>Durante este proyecto, uno de los principales desafíos fue llevar a cabo un rediseño integral del producto con recursos limitados, comenzando únicamente con algunos conceptos básicos adquiridos de fuentes gratuitas. Me propuse mejorar la usabilidad y consistencia visual del sitio, experimentando en paralelo con la herramienta Figma, de la cual tenía poca experiencia. También me enfrenté al reto de lograr accesibilidad y optimización para diferentes dispositivos, aplicando principios de jerarquía visual, armonía y responsividad para adaptarlo tanto a escritorio como a móvil. Otro desafío fue crear un diseño atractivo y accesible, con el objetivo de lograr una experiencia de usuario que se diferenciara de la competencia.</p>
      <br/>
      <p>Estos desafíos impulsaron mi aprendizaje y crecimiento profesional. Ahora tengo una base sólida en componentización, estándares de accesibilidad (WCAG), arquitectura de la información y animaciones avanzadas. También mejoré mis habilidades en copywriting, vectorización y diseño UI, con un enfoque en la consistencia y la conversión.</p></>
    ),
    className: "desafios-y-aprendizajes left-section"
  },
  reflection: {
    title: "Reflección Personal",
    description: (
      <>
      <p>
      Tengo un gran cariño por este proyecto; es el segundo que emprendí desde mediados de 2023 y ha sido una inversión de muchas horas y dedicación. En el pasado, exploré la programación, pero, a medida que avanzaba, descubrí el diseño UX/UI y quedó claro que era donde quería profundizar. Este proyecto me dio la oportunidad de aplicar y perfeccionar lo aprendido, además de experimentar un crecimiento profesional significativo en un área que me apasiona. Con él, no solo confirmé mi deseo de desarrollarme en diseño UX/UI, sino que también siento que estoy un paso más cerca de cumplir el sueño de poder vivir de esta profesión
      </p></>
    ),
    className: "desafios-y-aprendizajes right-section"
  }
};

