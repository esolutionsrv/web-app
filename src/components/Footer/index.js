import React from 'react';
import {Link} from 'react-router-dom';
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';

import {FooterBar} from './styles';

export default function Footer(){

  var today = new Date();
  var year = today.getFullYear();

  return(
    <FooterBar>
      <div className="menu-container">
        <Link to="/">
          <span>Inicio</span>
        </Link>

        <Link to="/plano-residencial">
          <span>Planos</span>
        </Link>

        <Link to="/contato">
          <span>Contato</span>
        </Link>

        <a
          href="http://sgp.esolution.srv.br:8000/accounts/central/login"
          without
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Acessar Área do Cliente</span>
        </a>
      </div>

      <div className="footer-container">
        <div>
          <span>Todos os direitos reservados &copy; {year} | Esolution</span>
        </div>

        <div className="socialMedia-container">
          <p>#<span>siga</span>nos</p>

          <a
            href="#!"
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook size={25} color="#4267B2"/>
          </a>

          <a
            href="#!"
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram size={25} color="#E1306C" />
          </a>

          <a
            href="https://wa.me/message/NHZ2IIJRHBS2P1"
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaWhatsapp size={25} color="#128c7e" />
          </a>
        </div>
      </div>
    </FooterBar>
  );
}
