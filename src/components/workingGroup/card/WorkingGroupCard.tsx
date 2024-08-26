import React from 'react';
import './workingGroupCard.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

interface WorkingGroupCardProps {
  imgSrc?: string;
  name: string;
  profession: string;
  description: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
}

const WorkingGroupCard: React.FC<WorkingGroupCardProps> = ({
  imgSrc,
  name = 'User', // Valor predeterminado para name
  profession,
  description,
  twitter = '#',
  facebook = '#',
  linkedin = '#',
}) => {
  const getRandomColor = () => {
    const colors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#B9FBC0', '#C0E0FC'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const initials = name.charAt(0).toUpperCase(); // Asegúrate de que `name` no sea undefined

  return (
    <div className="working-group-card">
      {imgSrc ? (
        <img src={imgSrc} alt={name} />
      ) : (
        <div className="avatar" style={{ backgroundColor: getRandomColor() }}>
          <span className="initials">{initials}</span>
        </div>
      )}
      <div className="content">
        <h1 className="name" style={{fontSize: '16px'}}>{name.toLocaleUpperCase()}</h1>
        <span style={{fontSize: '11px', opacity: .7}} className="profession">{profession.toUpperCase()}</span>
        <p className="description">{description}</p>
      </div>
      <div className="socialNetworks">
        {twitter && <a href={twitter} className="btn btn-icon" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a>}
        {facebook && <a href={facebook} className="btn btn-icon" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>}
        {linkedin && <a href={linkedin} className="btn btn-icon" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>}
      </div>
    </div>
  );
}

export default WorkingGroupCard;
