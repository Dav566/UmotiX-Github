

import { useState, useMemo } from "react";
import Header from "./components/header.jsx";
import Body from "./components/BODY/Body.jsx";
import Filters from "./components/CATALOGO/Filters.jsx";
import ProductList from "./components/CATALOGO/ProductList.jsx";
import { products } from "./data/Products.js";
import Cart from "./components/CATALOGO/Cart.jsx";
import Contact from "./components/CONTACTO/Contact.jsx";
import Admin from "./components/ADMIN/Admin.jsx";
import Login from "./components/ADMIN/login.jsx";
import ChatIA from "./components/CHATBOT/ChatIA.jsx"


function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [adminAutenticado, setAdminAutenticado] = useState(
    Boolean(localStorage.getItem("tokenAdmin"))
  );

  const categories = [...new Set(products.map((p) => p.category))];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        selectedCategory === "Todas" || p.category === selectedCategory;

      return matchName && matchCategory;
    });
  }, [search, selectedCategory]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const deleteFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cerrarSesion = () => {
    localStorage.removeItem("tokenAdmin");
    setAdminAutenticado(false);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Body />

      <main className="container" id="productos">
        <Filters
          search={search}
          onSearch={setSearch}
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <ProductList products={filtered} onAdd={addToCart} />
      </main>

      <Contact />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        total={cartTotal}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onDelete={deleteFromCart}
      />

      <section id="administracion">
        {adminAutenticado ? (
          <Admin onLogout={cerrarSesion} />
        ) : (
          <Login onLogin={() => setAdminAutenticado(true)} />
        )}
      </section>
      <ChatIA />
    </div>
  );
}

export default App;
