import React, {useEffect} from 'react';
import {MdViewList} from 'react-icons/md';
import {Link} from 'react-router-dom';

import logo from '../../assets/img/esolution_logo.jpeg';

import {MenuBar} from './styles';
import './styles.css';

function Menu() {

  useEffect(() => {
    const navbar = document.querySelector('.js-custom-navbar');
    const menuIcon = document.querySelector('.js-menu-icon');
    const menuIconClose = document.querySelector('.js-menu-icon span');

    menuIcon.addEventListener('click', e => {
    e.preventDefault();
    navbar.classList.toggle("open");
    menuIconClose.classList.toggle("fa-times");
    });
  }, [])

  return(
    <MenuBar>
      <Link to="/" className="ripple-wave">
        <img src={logo} alt="Esolution" />
      </Link>

      <ul className="custom-navbar js-custom-navbar">
        <li>
          <Link to="/" className="ripple-wave">Inicio</Link>
        </li>
        <li>
          <Link to="/plano-residencial" className="ripple-wave">Planos</Link>
        </li>
        <li>
        <Link to="/contato" className="ripple-wave">Contato</Link>
        </li>
        <li>
          <a
            without
            rel="noopener noreferrer"
            href="http://sgp.esolution.srv.br:8000/accounts/central/login"
            target="_blank"
            className="ripple-wave"
          >
            Área do Cliente
          </a>
        </li>
        <li>
          <a href="https://play.google.com/store/apps/details?id=br.com.app.gpu2137768.gpu43d71b6f36ac2b5ac732cffa6fec601e">
            Baixar App Android
          </a>
        </li>
      </ul>
      <button className="menu-icon js-menu-icon">
        <span className="fa fa-bars"><MdViewList /></span>
      </button>
    </MenuBar>
  );
}

export default Menu;
