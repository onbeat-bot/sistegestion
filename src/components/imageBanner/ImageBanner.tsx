import './imageBanner.scss';

const ImageBanner = ({ imagePosition = 'right' }) => {
  return (
    <div className={`image-banner banner--${imagePosition}`}>
      <div className="text-content">
        <h5>SABEMOS DE LO QUE HABLAMOS</h5>
        <h1>¿Por qué elegirnos?</h1>
        <p>
          Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el sector.
          Nuestra dedicación y búsqueda de excelencia nos permite ofrecerte soluciones efectivas.
        </p>

        <ul>
          <li>Experiencia Comprobada.</li>
          <li>Compromiso, Confidencialidad y Ética profesional.</li>
          <li>Actualización constante a los cambios legales.</li>
        </ul>
      </div>
      
      <div className="image-content">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default ImageBanner;
