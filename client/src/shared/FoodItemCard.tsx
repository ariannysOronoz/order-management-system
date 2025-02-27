import './FoodItemCard.css';
import './Global.css';

interface FoodItemCardProps {
  itemName:string,
  isChecked?:boolean,
  onCheckboxClick: () => void;
}

export default function FoodItemCard({itemName, isChecked, onCheckboxClick }:FoodItemCardProps) {

    return (
      <div className="food-item-card card-style responsive-tablet responsive-large">
        <div className="food-item-common global-card-style global-flex-center">{itemName}</div>
        <div className="food-item-common global-card-style global-flex-center">
        <input 
            type="checkbox" 
            checked={isChecked} 
            aria-label={`Seleccionar ${itemName}`}
            onChange={onCheckboxClick}
        />
        </div>
      </div>
    );
}