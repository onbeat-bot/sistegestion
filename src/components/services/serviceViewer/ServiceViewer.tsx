import './serviceViewer.scss';

interface ServiceViewerProps {
  title: string;
  subtitle?: string;
  description?: string; // Hacer que description sea opcional
  features?: string[]; // Hacer que features sea opcional y ser un array de strings
  imgSrc?: string;
  imagePosition?: 'left' | 'right'; // Nueva propiedad para la posición de la imagen
}

const ServiceViewer: React.FC<ServiceViewerProps> = ({
  title,
  subtitle,
  description,
  features = [],
  imgSrc,
  imagePosition = 'left', // Valor predeterminado
}) => {
  return (
    <div className={`service-viewer ${imagePosition}`}>
      <div className="image-content">
        {imgSrc && <img src={imgSrc} alt="" />}
      </div>
      <div className="text-container">
        <h1>{title}</h1>
        <span style={{ fontStyle: 'italic', opacity: 0.7 }}>{subtitle?.toUpperCase()}</span>
        {description && <p className="description">{description}</p>}
        {features.length > 0 && (
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ServiceViewer;
