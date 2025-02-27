import DishDetails from '../../shared/DishDetails';
import './Menu.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"

interface DishProps  {
  id: number;
  title: string;
  description: string;
  price: number;
}


const dishes: DishProps[] = [
    { id: 1, title: "Pizza Margarita", description: "Tomate, queso y albahaca", price: 12.99 },
    { id: 2, title: "Sushi Roll", description: "Salmón, aguacate y arroz", price: 9.99},
    { id: 3, title: "Hamburguesa Clásica", description: "Carne, queso y lechuga",price: 10.99},
  ];
 

  export default function Menu() {
    const navigate = useNavigate(); 
    const [orderId, setOrderId] = useState<string | null>(null);

    const handleSelect = (dish: DishProps) => {
        navigate(`/pedido/${dish.id}`); 
    };

    const handleOrder = () => {
        const uniqueOrderId = uuidv4(); 
        setOrderId(uniqueOrderId); 
    };

    return (
        <div className="menu">
            <h1>Lista de Platos</h1>
            {dishes.map((dish) => (
                <DishDetails
                    key={dish.id}
                    title={dish.title}
                    description={dish.description}
                    price={dish.price}
                    onSelectClick={() => handleSelect(dish)}
                />
            ))}
            <button onClick={handleOrder}>Marcar Orden</button>
                {orderId && (
                    <div className="order-confirmation">
                        <p>Gracias por tu compra. Tu ID de orden es: {orderId}</p>
                    </div>
                )}
        </div>
    );
}