import React from 'react';
import {MdFileDownload, MdCloudDone, MdCall, MdLocationOn} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';
import {Link} from 'react-router-dom';

import Menu from '../../components/Menu';
import FooterBar from '../../components/Footer';
import CardPlanos from '../../components/cardPlanos';

import {
  CapaImg,
  TextAnimated,
  AreaCliente,
  CardActions,
  BandaLargaResidencial,
  PlanoResidencial,
  Section01
} from './styles';

import ImageBandaLarga from '../../assets/img/bandaLarga.png';
import contrato from '../../assets/downloads/CONTRATO_ESOLUTION.pdf';

function Home(){
  return(
    <>
      <Menu />

      <CapaImg>
        <div className="capa-container">
          <TextAnimated>Internet para toda família.</TextAnimated>
          <form>

          </form>
        </div>
      </CapaImg>

      <AreaCliente>
        <div className="intro-AreaCliente">
          <h1>Acesso Rápido</h1>
          <span>ÁREA DO CLIENTE</span>

          <p>Com a central de clientes você pode ter acesso a segunda via
            de boleto, consumo da internet, boletos pagos e alteração da
            velocidade do plano escolhido.
          </p>
        </div>

        <CardActions>
          <div className="card-feature">
            <MdFileDownload size={20} color="#27AE60" />
            <a
              href={contrato}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span>Baixar Contrato Esolution</span>
            </a>
          </div>

          <div className="card-feature">
            <MdFileDownload size={20} color="#27AE60" />
            <a
              without
              rel="noopener noreferrer"
              href="http://sgp.esolution.srv.br:8000/accounts/central/login"
              target="_blank"
            >
              <span>Baixar 2 Via de Fatura</span>
            </a>
          </div>

          <div className="card-feature">
            <MdCloudDone size={20} color="#27AE60" />
            <a
              without
              rel="noopener noreferrer"
              href="https://www.speedtest.net/pt"
              target="_blank"
            >
            <span>Teste de Velocidade</span>
            </a>
          </div>

          <div className="card-feature">
            <IoLogoWhatsapp size={20} color="#27AE60" />
            <a
              href="https://api.whatsapp.com/send?phone=559230204050"
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Whatsapp</span>
            </a>
          </div>

          <div className="card-feature">
            <MdCall size={20} color="#27AE60" />
            <a href="tel:08000420499">
              <span>
                Ligar Para o Suporte
              </span>
            </a>
          </div>
        </CardActions>
      </AreaCliente>

      <BandaLargaResidencial>
        <img
          srcSet={`${ImageBandaLarga}, ${ImageBandaLarga} 2x`}
          src={ImageBandaLarga}
          alt="Banda Larga"
        />

        <div>
          <h1>Banda Larga</h1>
          <span>Residencial</span>

          {/* <p>Neque porro quisquam est qui
            dolorem ipsum quia dolor.</p> */}

          <div className="button-container">
            <Link to="plano-residencial">
              Saiba Mais
            </Link>
          </div>
        </div>
      </BandaLargaResidencial>

      <PlanoResidencial>
        <section>
          <h1>Nossos Planos</h1>
          <p>Para a sua residência</p>
        </section>

        <CardPlanos />
      </PlanoResidencial>

      <Section01>
        <h1>Locais de atuação da nossa rede.</h1>

        <div className="container-row">
          <div className="card__localidade">
            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Colônia Terra Nova</span>
            </div>

            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Piorini</span>
            </div>

            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Jesus me Deu</span>
            </div>

            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Nova Cidade </span>
            </div>

            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Vila Jardim Azaleia</span>
            </div>

            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Vila Jardim Lírio </span>
            </div>
          </div>

          <div className="card__localidade">
            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Vila Jardim Jasmin </span>
            </div>

            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Vila Jardim Orquidea </span>
            </div>

            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Verona Prêmio</span>
            </div>

            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Residencial Nova Manaus - Iranduba</span>
            </div>

            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Parque dos barões - Iranduba</span>
            </div>

            <div>
              <MdLocationOn size={20} color="#27AE60" />
              <span>Iranduba</span>
            </div>
          </div>
        </div>

      </Section01>

      <FooterBar />
    </>
  );
}

export default Home;
