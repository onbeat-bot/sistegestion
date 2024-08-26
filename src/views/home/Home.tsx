import React, { useState } from 'react';
import './home.scss';
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import ImageBanner from "../../components/imageBanner/ImageBanner";
import WorkingGroupCard from "../../components/workingGroup/card/WorkingGroupCard";
import CustomerCard from '../../components/customerCard/CustomerCard';
import ServiceCard from '../../components/services/serviceCard/ServiceCard';
import Modal from '../../components/modal/Modal'; // Asegúrate de ajustar la ruta
import ContactForm from '../../components/forms/contactForm/ContactForm';
import ServiceViewer from '../../components/services/serviceViewer/ServiceViewer';
import Outsourcing from '../../assets/images/outsourcing.jpg'

const Home: React.FC = () => {
  // Estado para el modal de formulario de contacto
  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);
  const openContactFormModal = () => setIsContactFormOpen(true);
  const closeContactFormModal = () => setIsContactFormOpen(false);

  // Estado para el modal de ServiceViewer
  const [isServiceViewerOpen, setIsServiceViewerOpen] = useState<boolean>(false);
  const [serviceViewerContent, setServiceViewerContent] = useState<{
    title: string;
    subtitle?: string;
    description?: string;
    features?: string[];
    imgSrc?: string;
  } | null>(null);

  const openServiceViewerModal = (content: {
    title: string;
    subtitle?: string;
    description?: string;
    features?: string[];
    imgSrc?: string;
  }) => {
    setServiceViewerContent(content);
    setIsServiceViewerOpen(true);
  };

  const closeServiceViewerModal = () => {
    setIsServiceViewerOpen(false);
    setServiceViewerContent(null);
  };


  return (
    <div className='home'>
      <Banner openModal={openContactFormModal} />
      <div className='services'>
        <h1>Conoce Nuestros Servicios</h1>
        <div className="service-br">
        <ServiceCard title='Outsourcing Contable-Financiero' imgSrc={Outsourcing}
            onClick={() => openServiceViewerModal({
            title: 'Outsourcing Contable-Financiero',
            description: 'Somos especialistas en Normas Internacionales de Información Financiera (NIIF) y Normas Internacionales de Contabilidad (NIC), te ayudamos a implementar y cumplir con los estándares globales para optimizar tus reportes financieros.',
            features: ['Implantación primera vez norma internacional.', 'Transición de norma local a norma internacional.', 'Elaboración manual de políticas contables.',
              'Asesoría contable bajo norma internacional versus norma fiscal.', 'Informe contables a los organismos de control.','Elaboración y seguimiento de la creación de las bases de datos.', 'Elaboración y seguimiento de sistemas de prevención de lavado de activos SIPLAFT y SARLAFT.',
              'Asesoría tributaria y fiscal.', 'Auditoria y Revisoría Fiscal.', 'Outsourcing contable.'
            ],
            imgSrc: Outsourcing
          })} />
        <ServiceCard title='Sistemas Integrados de Gestión' 
            onClick={() => openServiceViewerModal({
            title: 'Sistemas Integrados de Gestión',
            subtitle: '"Calidad - Medio Ambiente - Salud en el Trabajador"',
            description: 'Implementamos y optimizamos sistemas integrados de gestión para asegurar la calidad, proteger el medio ambiente y garantizar la salud y seguridad de los trabajadores. Nuestro enfoque integral mejora la eficiencia y el cumplimiento normativo de su empresa.',
            features: ['Implantación e implementación de Sistemas de Calidad, Medio Ambiente, Salud en el trabajo y responsabilidad social corporativa, según normas ISO 9001, ISO 14000, ISO 18000.',
               'Auditoria interna a sistemas ya implantado.', 'Seguimiento a los sistemas para evitar desviaciones.', 'Implementación del SG- SST', 'ISO 450001'],
            imgSrc: 'path/to/image.jpg'
          })}/>
        <ServiceCard title='Gestion del Recurso Humano' 
            onClick={() => openServiceViewerModal({
            title: 'Gestión del Recurso Humano',
            description: 'Prever y elegir el profesional adecuado para evitar el riesgo es la tarea más importante en su empresa. Por eso en Sistegestion te ayudamos con las herramientas para escoger tu mejor equipo de trabajo con el menor riesgo laboral y el mas alto profesionalismo.',
            features: ['Outsourcing de nomina.', 'Reclutamiento', 'Pruebas psicotécnicas.', 'Evaluación de personal ética y profesional.'],
            imgSrc: 'path/to/image.jpg'
          })}/>
        <ServiceCard title='Administracion de Propiedad Horizontal' 
            onClick={() => openServiceViewerModal({
            title: 'Administracion de Propiedad Horizontal',
            description: 'El crecimiento urbanístico ha abierto paso a grandes concentraciones de personas en edificios y espacios cerrados que crean serios problemas de convivencia nuestros profesionales tienen soluciones concretas y precisas para soluciones de conflictos y administración profesional y creativa de unidades abiertas y cerradas.',
            features: ['Administración de su unidad residencial.', 'Creación de los estatutos en unidades residenciales nuevas.',
              'Elaboración de manuales internos como manual de convivencia.', 'Manual de contratación.', 'Manual de empleados.', 'Politica de protección de datos.',
              'Implementaciones del st ssg para propiedad horizontal.', 'Manual de seguridad vial.', 'Resolucion de conflictos.', 'Recuperación de cartera.',
              'Actualización a los estatutos de la propiedad horizontal', 'Auditoria Integral'
            ],
            imgSrc: 'path/to/image.jpg'
          })}/>
        <ServiceCard title='Asistencia Legal Estrategica y Profesional' 
            onClick={() => openServiceViewerModal({
            title: 'Asistencia Legal Estrategica y Profesional',
            description: 'En Sistegestion, brindamos asistencia legal estratégica y profesional para proteger tu negocio. Nuestros abogados expertos ofrecen soluciones jurídicas personalizadas. Desde la prevención de riesgos hasta la resolución de conflictos, estamos aquí para apoyarte en cada paso.',
            features: ['Asesoría jurídica.', 'Derecho Administrativo.', 'Derecho Constitucional.', 'Derecho Electoral.', 'Derecho Comercial.', 'Derecho Tributario.',
              'Derecho Disciplinario.', 'Derecho Penal Militar.', 'Derecho Civil.', 'Derecho Laboral.', 'Defensa en Derecho Penal.',
              'Recurso Extraordinario de Casación.', 'Recurso Extraordinario de Revisión.', 'Conciliaciones Extra Procesales.',
              'Legalización de predios, lotes, casas o inmuebles.'
            ],
            imgSrc: 'path/to/image.jpg'
          })}/>
        </div>
      </div>
      <ImageBanner imagePosition="right" />
      
      <div className='banner'>
        <h3 style={{ color: 'white', background: '#252525', padding: '10px', borderRadius: '10px' }}>
          {('¡No Tomes Riesgos Inecesarios!').toUpperCase()}
        </h3>
        <h1>Confía en nuestros expertos para manejar tu contabilidad, recursos humanos, asuntos jurídicos y tributarios.</h1>
        <button onClick={openContactFormModal}>Contactanos Hoy</button>
      </div>
      <div className="customer-br">
        <h4>ALGUNOS DE NUESTROS CLIENTES</h4>
        <CustomerCard imgSrc='' />
      </div>

      <div className="working-group">
        <h4>NUESTRO GRUPO DE TRABAJO</h4>
        <div className='working-group-list'>
          <WorkingGroupCard
            imgSrc={''}
            name={'Edgardo Enrique Niebles Osorio'}
            profession={'Doctor en Derecho y Ciencias Políticas'}
            description={'Egresado en 1977 de la Universidad Libre de Colombia. Abogado litigante puro, con más de 40 años de experiencia. Casacionista.'}
          />
          <WorkingGroupCard
            imgSrc={''}
            name={'Claudia Barrera Rivera'}
            profession={'Contador Publico - NIC NIIF'}
            description={'Auditora de Sistemas Integrales de Gestión de la Universidad Camilo José de Cela de España. (Bureau Veritas). Egresada de la Fundación Universitaria San Martin (Meta).'}
          />
          <WorkingGroupCard
            imgSrc={''}
            name={'Javier Edgardo Niebles Alba'}
            profession={'Arquitecto - Urbanista'}
            description={'Arquitecto de la Universidad Pontificia Bolivariana, Especialista en Derecho Urbano, Propiedad y Políticas del Suelo de la Universidad de Los Andes y Planificación Estratégica Urbana.'}
          />
          <WorkingGroupCard
            imgSrc={''}
            name={'Silvia Maria Rojas'}
            profession={'Administradora en Salud Ocupacional'}
            description={'Supervisor HSEQ, Administrador en Salud Ocupacional, Técnico en seguridad y salud ocupacional, con experiencia en seguridad y salud industrial.'}
          />
          <WorkingGroupCard
            imgSrc={''}
            name={'Claudia Patricia Niebles Alba'}
            profession={'Psicologa - Antropologa'}
            description={'Psicóloga de la Universidad de Buenaventura y Antropóloga de la Universidad de Antioquia con maestría en recursos humanos y gestión del conocimiento y diplomados en calidad del recurso humano con experiencia en reclutamiento enganche nomina procesos disciplinarios.'}
          />
          <WorkingGroupCard
            imgSrc={''}
            name={'Daniel Felipe Cardenas Barrera'}
            profession={'Psicologo'}
            description={'Egresado de la Universidad Minuto de Dios. Experiencia en el manejo del recurso humano, con diplomado en derechos humanos, participacion ciudadana o ciudadania.'}
          />
        </div>
      </div>

      <Footer />

      <Modal isOpen={isContactFormOpen} onClose={closeContactFormModal}>
        <h2>Formulario de Contacto</h2>
        {/* Aquí puedes colocar el componente de formulario */}
        <ContactForm />
      </Modal>
      {/* Modal para el ServiceViewer */}
      <Modal isOpen={isServiceViewerOpen} onClose={closeServiceViewerModal}>
        {serviceViewerContent && (
          <ServiceViewer
            title={serviceViewerContent.title}
            subtitle={serviceViewerContent.subtitle}
            description={serviceViewerContent.description}
            features={serviceViewerContent.features}
            imgSrc={serviceViewerContent.imgSrc}
          />
        )}
      </Modal>
    </div>
  );
};

export default Home;
