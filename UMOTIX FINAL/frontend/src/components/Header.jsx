import Menu from "./Menu.jsx";
import Logo from "./Logo.jsx";
import "./Header.css";

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <Logo />
      <a href="#UMOTIX" className="UMOTIX-HEADER">
        UMOTIX
      </a> 
      <Menu />
       <button className="header__cart" onClick={onCartClick}>
         🛒 {cartCount}
       </button>
    </header>
  );
}

export default Header;