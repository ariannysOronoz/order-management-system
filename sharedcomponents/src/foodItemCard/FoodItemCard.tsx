import './FoodItemCard.css';

interface FoodItemCardProps {
  itemName:string,
  isChecked:boolean,
}


export default function FoodItemCard({ itemName, isChecked }:FoodItemCardProps ) {
    return (
      <div className="Food-Item-Card">
        <div className="Food-Item">{itemName}</div>
        <div className="Food-Checkbox-Item">
            <input type="checkbox" checked={isChecked} />
        </div>
      </div>
    );
};