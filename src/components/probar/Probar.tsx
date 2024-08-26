import { useState, useEffect, useContext } from 'react';
import { AuthContext, AuthContextType } from '../../context/authContext';
import './probar.scss'; // Asegúrate de crear este archivo para los estilos

const Probar: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const authContext = useContext<AuthContextType | undefined>(AuthContext);

  const handleScroll = () => {
    if (window.scrollY > 320) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!authContext?.currentUser) {
    return <div className={`probar ${isSticky ? 'sticky' : ''}`}>
        <div className="container">Loading...</div></div>; // O maneja el caso cuando currentUser no está disponible
  }

  return (
    <div className={`probar ${isSticky ? 'sticky' : ''}`}>
      <div className='container'>
        <div className='brandName'>
          <img src="" alt="Logo" className='logo' />
          <div className='brandText'>
            <h4>{authContext.currentUser.username}</h4> {/* Muestra el nombre del usuario */}
            <span>Welcome to Probar</span>
          </div>
        </div>

        <div className='menu'>
          <a href="/login">Login</a>
          <a href="/profile">User</a>
        </div>
      </div>
    </div>
  );
};

export default Probar;
