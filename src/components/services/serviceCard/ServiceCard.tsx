import './serciveCard.scss';

interface ServiceCardProps {
  title: string;
  imgSrc?: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imgSrc, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <div 
        className="background-image" 
        style={{ backgroundImage: imgSrc ? `url(${imgSrc})` : undefined }}
      />
      <div className="overlay" >
      <div className="text-container">
        <h1>{title}</h1>
      </div>
      </div>
    </div>
  );
}

export default ServiceCard;
