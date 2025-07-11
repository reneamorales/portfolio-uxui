import "./item.css";

export const Item = ({ imageSrc, subtitle, description, onImageClick }) => {
  const hasContent = Boolean(subtitle || description);

  return (
    <div className={`grid__item ${hasContent ? 'card--with-content' : 'card--image-only'}`}>
      <img
        className={`grid__item-image ${hasContent ? 'card__image--spaced' : ''}`}
        src={imageSrc}
        alt={subtitle ? `${subtitle} image` : "Grid item"}
        onClick={onImageClick ? () => onImageClick() : undefined}
      />
      {subtitle && <p className="grid__item-subtitle">{subtitle}</p>}
      {description && <p className="grid__item-description">{description}</p>}
    </div>
  );
};