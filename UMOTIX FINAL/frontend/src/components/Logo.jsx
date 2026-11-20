import "./Logo.css";
import pulpo from "./img/pulpo.jpeg";

function Logo() {
  return (
    <div>
      <a href="#UMOTIX">
        <img src={pulpo} alt="UMOTIX" className="Logo" />
      </a>
    </div>
  );
}
export default Logo;