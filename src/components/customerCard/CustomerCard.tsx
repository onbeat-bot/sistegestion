import './CustomerCard.scss';

interface CustomerCardProps {
  imgSrc: string;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ imgSrc }) => {
  return (
    <div className="customer-card">
      <img src={imgSrc} alt="Customer Logo" className="logo" />
    </div>
  );
}

export default CustomerCard;
