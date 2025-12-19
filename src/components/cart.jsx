export default function Cart({ cart, updateQty, removeItem }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <aside className="cart">
      <h2>Cart ({cart.reduce((a, c) => a + c.qty, 0)})</h2>

      {cart.length === 0 && <p>No products added</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <div>
            <strong>{item.name}</strong>
            <p>${item.price} × {item.qty}</p>
          </div>

          <div className="cart-actions">
            <button onClick={() => updateQty(item.id, 1)}>+</button>
            <button onClick={() => updateQty(item.id, -1)}>-</button>
            <button onClick={() => removeItem(item.id)}>✕</button>
          </div>
        </div>
      ))}

      <hr />
      <h3>Total: ${total}</h3>
      <button className="checkout-btn">Checkout</button>
    </aside>
  );
}
