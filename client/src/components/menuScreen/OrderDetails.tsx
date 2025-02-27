import { useParams } from "react-router-dom";
import { useCart } from "./CartProvider";


export interface DishProps {
  id: number;
  title: string;
  quantity: number;
  description: string;
  status: string;
  price: number;
}

const dishes: DishProps[] = [
    { id: 1, title: "Pizza Margarita", quantity: 1, description: "Tomate, queso y albahaca", status: "", price: 12.99 },
    { id: 2, title: "Sushi Roll", quantity: 1, description: "Salmón, aguacate y arroz", status: "", price: 9.99 },
    { id: 3, title: "Hamburguesa Clásica", quantity: 1, description: "Carne, queso y lechuga", status: "", price: 10.99 },
];

export default function OrderDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const pedido = dishes.find(p => p.id === Number(id));

    if (!pedido) {
        return <p>Pedido no encontrado.</p>;
    }

    return (
        <div className="orderDish">
            <div className="SelectDish">
            <h2>Detalles del Pedido</h2>
            <p><strong>Plato:</strong> {pedido.title}</p>
            <p><strong>Descripción:</strong> {pedido.description}</p>
            <p><strong>Precio:</strong> ${pedido.price}</p>
            <p><strong>Estado:</strong> {pedido.status}</p>
        </div>
        <div className="buttons">
            <button onClick={() => addToCart(pedido)}>Pedir</button>
        </div>
        </div>
    );
}