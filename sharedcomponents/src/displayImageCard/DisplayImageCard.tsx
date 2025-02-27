import './DisplayImageCard.css';

interface DisplayImageCardProps {
  title:string,
  imageSrc:string,
  description:string,
}

export default function DisplayImageCard ({ imageSrc, title, description }: DisplayImageCardProps){
  return (
    <div className="image_card">
      <img src={imageSrc} alt={title} className="image-card__img" />
      <div className="image-card__content">
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__description">{description}</p>
      </div>
    </div>
  );
}
