import  { useState, useEffect } from 'react';
import './navbar.scss';

const Navbar: React.FC = () => {
  
  // Estado para el navbar sticky
  const [isSticky, setIsSticky] = useState<boolean>(false);

  // Función que maneja el scroll
  const handleScroll = () => {
    // Verificar la posición del scroll y cambiar el estado
    if (window.scrollY > 320) { // Puedes ajustar este valor según tu necesidad
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Agregar y eliminar el manejador de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className='container'>
      <div className='brandName'>
        <img src="" alt="Logo" className='logo' />
        <div className='brandText'>
          <h4>SISTEGESTION</h4>
          <span>Sistemas Integrados de Negocios</span>
        </div>
      </div>

      <div className='menu'>
        <a href="/">Inicio</a>
        <a href="/ourservices">Nuestros Servicios</a>
        <a href="/whoweare">¿Quiénes Somos?</a>
        <a href="/blog">Blog</a>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
