import "./lightbox.css";
import CloseIcon from "./CloseIcon";

const Lightbox = ({ imageSrc, onClose }) => {
  // Cierra el lightbox al hacer click en el overlay
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("image-light")) {
      onClose();
    }
  };

  return (
    <section className="image-light show" onClick={handleOverlayClick}>
      <CloseIcon onClick={onClose} />
      <img
        src={imageSrc}
        alt="Imagen ampliada"
        className="add-imagen showImage"
        onClick={(e) => e.stopPropagation()} // Evita que el click en la imagen cierre el lightbox
      />
    </section>
  );
};

export default Lightbox;