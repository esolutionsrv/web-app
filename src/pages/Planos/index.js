import React from 'react';
import {MdCheck} from 'react-icons/md';

import Menu from '../../components/Menu';
import FooterBar from '../../components/Footer';
import CardPlanos from '../../components/cardPlanos';
import {IntroPlanos, PlanoResidencial, Vantagem} from './styles';

import ImgPlanoFilme from '../../assets/img/Group2.jpg'
import ImgPlanoJogos from '../../assets/img/Group1.jpg'

function Planos() {
  return(
    <>
      <Menu />

      <IntroPlanos>
        <div>
          <b>Banda Larga</b> Residencial
          <p>ideal para dummy text lorem impsum</p>
        </div>

        <div className="cardImage">
          <img
            className="zoom"
            srcSet={`${ImgPlanoFilme}, ${ImgPlanoFilme} 2x`}
            src={ImgPlanoFilme}
            alt="Banda Larga - Filme"
          />

          <img
            className="zoom"
            srcSet={`${ImgPlanoJogos}, ${ImgPlanoJogos} 2x`}
            src={ImgPlanoJogos}
            alt="Banda Larga - Jogos"
          />
        </div>
      </IntroPlanos>

      <PlanoResidencial>
        <header>
          <h1>Conheça Nossos Planos</h1>
          <p>Para a sua residência</p>
        </header>

        <CardPlanos />
      </PlanoResidencial>

      <Vantagem>
        <header>
          <h1>Vantanges Esolution</h1>
        </header>

        <div className="card__localidade">
          <div>
            <MdCheck size={20} color="#27AE60" />
            <span>Suporte Técnico</span>
          </div>

          <div>
            <MdCheck size={20} color="#27AE60" />
            <span>Tecnologia Fibra Óptica</span>
          </div>
        </div>
      </Vantagem>

      <FooterBar />
    </>
  );
}

export default Planos;
