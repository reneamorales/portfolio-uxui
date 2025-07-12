import hiPiPrototype1 from "../../../img/cranbelo/wireframe-high-fidelity/Frame 372.png";
import hiPiPrototype2 from "../../../img/cranbelo/wireframe-high-fidelity/Frame 373.png";
import hiPiPrototype3 from "../../../img/cranbelo/wireframe-high-fidelity/Frame 374.png";
import hiPiPrototype4 from "../../../img/cranbelo/wireframe-high-fidelity/Frame 375.png";

import lofiPrototype1 from "../../../img/cranbelo/wireframe-low-fidelity/hero-about-us.png";
import lofiPrototype2 from "../../../img/cranbelo/wireframe-low-fidelity/about-us-team.png";
import lofiPrototype3 from "../../../img/cranbelo/wireframe-low-fidelity/form-contact.png";
import lofiPrototype4 from "../../../img/cranbelo/wireframe-low-fidelity/home-hero.png";
import lofiPrototype5 from "../../../img/cranbelo/wireframe-low-fidelity/footer.png";
import lofiPrototype6 from "../../../img/cranbelo/wireframe-low-fidelity/testimonials.png";
/**--- */

import imageUi1 from "../../../img/design-shots-section-cards.png";
import imageUi2 from "../../../img/design-shots-section-cards.png";
import imageUi3 from "../../../img/design-shots-section-cards.png";
import imageUi4 from "../../../img/design-shots-section-cards.png";

import keyDisplay1 from "../../../img/cranbelo/keyScreens/screen-1.png";
import keyDisplay2 from "../../../img/cranbelo/keyScreens/screen-2.png";
import keyDisplay3 from "../../../img/cranbelo/keyScreens/screen-3.png";
import keyDisplay4 from "../../../img/cranbelo/keyScreens/screen-4.png";

export const wireframes = {
  title: "Wireframes",
  item: [
    {
      type: "img", // ¡Añadido!
      imageSrc: lofiPrototype1,
      subtitle: "Presentación de Miembros del Equipo (Desktop y Mobile)",
      description:
        "En la pantalla de presentación del equipo, los miembros se muestran en una cuadrícula de 3x2 en la versión de escritorio, permitiendo una visualización simultánea de varios perfiles. En la versión móvil, la cuadrícula se adapta a un formato 2x3, optimizando el espacio en pantallas pequeñas sin perder claridad.",
    },
    {
      type: "img", // ¡Añadido!
      imageSrc: lofiPrototype2,
      subtitle: "Pantalla de sección Nosotros - Versión Móvil:",
      description:
        "La sección Nosotros comienza con un hero visual destacado, seguido por una introducción de Cranbelo y una presentación del equipo.",
    },
    {
      type: "img", // ¡Añadido!
      imageSrc: lofiPrototype3,
      subtitle: "Formulario de Contacto: (Desktop y Mobile)",
      description:
        "La pantalla de contacto está organizada en secciones claras: en escritorio, los campos se disponen en dos columnas para facilitar la navegación, mientras que en móvil se alinean en una sola columna para una experiencia fluida.",
    },
    {
      type: "img", // ¡Añadido!
      imageSrc: lofiPrototype4,
      subtitle: "Vista Detallada del Curso y Lista de Módulos (Mobile)",
      description:
        "Incluye imagen destacada, descripción y botón de acción. La lista de módulos en cuadrícula facilita una navegación rápida.La lista de módulos en cuadrícula de 3x3 para escritorio y en 2x2 para móvil",
    },
    {
      type: "img", // ¡Añadido!
      imageSrc: lofiPrototype5,
      subtitle: "Footer: Adaptada para escritorio y móvil",
      description:
        "El footer está pensado para incluir enlaces, información de contacto y redes sociales; en móvil se organiza en una sola columna para facilitar la navegación, mientras que en escritorio se muestra en formato horizontal para una mejor distribución en pantallas amplias.",
    },
    {
      type: "img", // ¡Añadido!
      imageSrc: lofiPrototype6,
      subtitle: "Carrusel de Testimonios (Desktop y Mobile)",
      description:
        "En escritorio, se muestran tres testimonios en una fila. En móvil, se presenta uno a la vez con navegación horizontal para facilitar la lectura.",
    },
  ],
};

export const hiPiPrototype = {
  title: "Prototipos de Alta Fidelidad",
  item: [
    { imageSrc: hiPiPrototype1 },
    { imageSrc: hiPiPrototype2 },
    { imageSrc: hiPiPrototype3 },
    { imageSrc: hiPiPrototype4 },
  ],
};

export const assetsUi = {
  title: "Componentes UI",
  descriptionBottom: (
    <>
      <p>
        Para optimizar la coherencia y responsividad del sitio, desarrollé un{" "}
        <strong>sistema de componentes clave</strong> enfocado en elementos
        específicos de la interfaz, como{" "}
        <strong>
          tarjetas de cursos, botones de acción, el menú de navegación y los
          templates de página
        </strong>
        . Estos templates cuentan con{" "}
        <u>
          variantes diseñadas para soportar animaciones y transiciones fluidas
        </u>
        , enriqueciendo la experiencia visual y de interacción.
      </p>
    </>
  ),
  item: [{ type: "video", videoSrc: "/resources/video/video-loop.mp4" }],
};

export const keyDisplay = {
  title: "Pantallas Claves",
  item: [
    {
      imageSrc: keyDisplay1,
      description: (
        <>
          <strong>Página de Detalle de Curso:</strong> Estructura optimizada con
          temario, calendario, testimonios y opciones de compra con CTA.
        </>
      ),
    },
    {
      imageSrc: keyDisplay2,
      description: (
        <>
          <strong>Página de Acerca de Nosotros:</strong> Propósito, valores,
          video institucional y presentación del equipo.
        </>
      ),
    },
    {
      imageSrc: keyDisplay3,
      description: (
        <>
          <strong>Sección de Testimonios (Home):</strong> Carrusel automático
          con elementos destacados y transiciones suaves.
        </>
      ),
    },
    {
      imageSrc: keyDisplay4,
      description: (
        <>
          <strong>Footer:</strong> Links frecuentes, contacto y redes sociales
          en un diseño limpio y eficiente.
        </>
      ),
    },
  ],
  descriptionBottom: (
    <>
      <p>
        <strong>1. Página de Detalle de Curso</strong>
        <br />
        <ul>
          <li>Título destacado y propuesta atractiva.</li>
          <li>
            Estructura clara: temario en tarjetas, calendario con fechas,
            modalidad del curso.
          </li>
          <li>
            Testimonios y opciones de pago: carrusel dinámico y CTAs definidos.
          </li>
        </ul>
        <br />
        <strong>2. Página de Equipo (Nosotros)</strong>
        <br />
        <ul>
          <li>Mensaje institucional: Propósito, valores y aporte social.</li>
          <li>
            Presentación del equipo: video institucional y Fotos profesionales .
          </li>
        </ul>
        <br />
        <strong>3. Sección de Testimonios (Home)</strong>
        <br />
        <ul>
          <li>
            Carrusel automático (5000ms) con jerarquía visual: elemento activo
            centrado y destacado.
          </li>
        </ul>
        <br />
        <strong>4. Footer</strong>
        <br />
        <ul>
          <li>
            Diseño limpio, categorías claras y sin redundancias con la barra de
            navegación.
          </li>
        </ul>
        <br />
      </p>
    </>
  ),
};
