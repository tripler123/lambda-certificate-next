import BasicLayout from "../Layouts/BasicLayout/BasicLayout.jsx";
import Seo from '../components/Seo'

export default function Home() {
  return (
    <BasicLayout>
      <Seo title="Lambda Ingeniería y Construcción"/>
      <div className="hero wrapper">
        <div className="hero__content-rigth">
          <h1 className="hero__content-rigth--title">
            Contruyendo profesionales con tecnología
          </h1>
          <p className="hero__content-rigth--description">
            Creemos juntos la nueva generación de profesionales que
            <strong> revolucionarán la industria de la construcción.</strong>
          </p>
          <a
            className="hero__content-rigth--button"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=51954904461&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso"
          >
            Contactanos
          </a>
        </div>
        <div className="hero__content-left">
          <img
            className="hero__content-left--banner"
            src="/images/hero-image.svg"
            alt=""
          />
        </div>
      </div>
    </BasicLayout>
  );
}
