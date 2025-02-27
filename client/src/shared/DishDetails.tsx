import React from "react";
import './DishDetails.css';
import './Global.css';

type DishDetailsProps = {
  title: string;
  quantity?: number;
  description: string;
  status?: string;
  price: number;
  onSelectClick: () => void;
};

export default function DishDetails({title,quantity,description,status,price,onSelectClick}:DishDetailsProps) {
    return (
    
      <div className="dish-details global-flex-center responsive-tablet responsive-large " onClick={onSelectClick}>
        {/* First column displaying title, quantity, and description */}
        <div className="summary-column1">
        <div className="global-card-style global-flex-center">{title}</div>
        {quantity !== undefined && ( 
          <div className="global-card-style global-flex-center">{quantity}</div>
        )}
        <div className="global-card-style global-flex-center">{description}</div>
       </div>

        {status !== undefined && ( 
          <div className="summary-column2 global-card-style global-flex-center">{status}</div>
        )}

        <div className="summary-column2 global-card-style global-flex-center">{price}</div>
      </div>
      );
    }