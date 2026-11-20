import "./Body.css";
import tienda from "../img/tienda.jpg";

function Body() {
  return (
    <section id="inicio" className="about">
      <div className="about__text">
        <h1 className="about__title">Sobre Nosotros</h1>
        <p>
          Somos una empresa dedicada a ofrecer productos deportivos de calidad
          para atletas y personas apasionadas por el deporte.
        </p>
        <p>
          Nuestro objetivo es brindar productos confiables, cómodos y
          accesibles, ayudando a nuestros clientes a encontrar el equipamiento
          adecuado para cada actividad deportiva.
        </p>
        <a href="#productos" className="about__btn">
          Ver nuestros productos
        </a>
      </div>

      <img src={tienda} alt="Tienda deportiva UMOTIX" className="about__img" />
    </section>
  );
}

export default Body;