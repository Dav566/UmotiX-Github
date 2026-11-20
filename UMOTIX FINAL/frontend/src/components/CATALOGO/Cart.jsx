import "./Cart.css";

function Cart({ isOpen, onClose, items, total, onAdd, onRemove, onDelete }) {
      console.log("Cart renderizado, isOpen =", isOpen);
  return (
    <>
      {/* Fondo oscuro: al hacer clic se cierra */}
      <div
        className={`cart-overlay ${isOpen ? "cart-overlay--open" : ""}`}
        onClick={onClose}
      />

      <aside className={`cart ${isOpen ? "cart--open" : ""}`}>
        <div className="cart__header">
          <h2>Tu carrito</h2>
          <button className="cart__close" onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="cart__empty">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart__list">
              {items.map((item) => (
                <li key={item.id} className="cart__item">
                  <img src={item.image} alt={item.name} className="cart__img" />
                  <div className="cart__info">
                    <strong>{item.name.trim()}</strong>
                    <span>${(item.price * item.qty).toLocaleString("es-CO")}</span>
                    <div className="cart__controls">
                      <button onClick={() => onRemove(item.id)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onAdd(item)}>+</button>
                      <button
                        className="cart__delete"
                        onClick={() => onDelete(item.id)}
                        aria-label="Eliminar"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart__footer">
              <p>
                Total: <strong>${total.toLocaleString("es-CO")}</strong>
              </p>
              <button className="cart__checkout">Finalizar compra</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default Cart;