import "./menu.css";

function Menu() {
  return (
    <nav className="menu">
      <a href="#inicio" className="MenuProductos">
        Inicio
      </a>
      <a href="#productos" className="MenuProductos">
        Productos
      </a>
      <a href="#contacto" className="MenuProductos">
        Contacto
      </a>
    </nav>
  );
}

export default Menu;