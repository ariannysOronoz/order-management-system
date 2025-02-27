import { useCart } from "./CartProvider";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div key={item.uniqueId}>
            <p>{item.title} - ${item.price}</p>
            <button onClick={() => removeFromCart(item.uniqueId)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
}
