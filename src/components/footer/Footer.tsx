import './footer.scss';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer">
        <div className='info'>
            <div className='location'>
                <div><LocationOnIcon/><span>Conjunto Residencial Montecarlo, Casa G 18</span></div>
                <div><PhoneIphoneIcon/><span>+57 313 879 86 72</span></div>
                <div><AlternateEmailIcon/><span>atencionalcliente@sistegestion.com</span></div>
            </div>
            <div className='footer-menu'>
            </div>
            <div className='network-menu'>
                <span>Síguenos en nuestras redes sociales</span>
                <TwitterIcon className='icon-xl'/>
                <FacebookIcon className='icon-xl'/>
                <LinkedInIcon className='icon-xl'/>
            </div>
        </div>

        <div className='brand-declaration'>
            <span>©SISTEGESTION, 2024. Todos los derechos reservados.</span>
        </div>
        <div>
            <span>® Powered by <strong>Galaxy</strong>  2024</span>
        </div>
    </div>
  )
}

export default Footer