import React from 'react';
import './banner.scss';

interface BannerProps {
  openModal: () => void; // Añadido para recibir la función openModal
}

const Banner: React.FC<BannerProps> = ({ openModal }) => {
  return (
    <div className="banner">
      <h1>ASESORIAS EMPRESARIALES INTEGRALES A TU MEDIDA</h1>
      <p style={{ fontWeight: 500 }}>Optimiza tu negocio con nuestro asesoramiento experto y personalizado.</p>
      <p style={{ fontWeight: 500 }}>
        Tranquilo, <strong style={{ border: '2px solid white', padding: '0.3rem 1rem', borderRadius: 50 }}>
          ¡Sabemos cómo hacerlo!
        </strong>
      </p>
      <button onClick={openModal}>Inicia Ahora</button> {/* Llama a openModal */}
    </div>
  );
};

export default Banner;
