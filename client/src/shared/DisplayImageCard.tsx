import './DisplayImageCard.css';
import './Global.css';


interface DisplayImageCardProps {
  title: string;
  imageSrc: string;
  description: string;
}

export default function DisplayImageCard ({ imageSrc, title, description }: DisplayImageCardProps){
  return (
    <div className="image-card ">
      <img src={imageSrc} alt={title} className="image-card-img" />
      <div className="content-card">
        <h3 className="content-card-common card-title">{title}</h3>
        <p className="content-card-common card-description">{description}</p>
      </div>
    </div>
  );
}