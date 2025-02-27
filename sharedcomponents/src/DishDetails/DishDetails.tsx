import './DishDetails.css';

interface DishDetailsProps {
  title:string,
  quantity:string,
  description:string,
  status:string,
  price:string
}

export default function DishDetails({title,quantity,description,status,price}:DishDetailsProps) {
    return (
      <div className="dish-details-container">
        <div className="dish-summary">
            <div className="dish-item dish-title">{title}</div>
            <div className="dish-item dish-quantity">{quantity}</div>
            <div className="dish-item dish-description">{description}</div>
        </div>
        <div className="dish-item dish-status">{status}</div>
        <div className="dish-item dish-price">{price}</div>
      </div>
    );
}