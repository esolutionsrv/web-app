import React from 'react';

import Menu from '../../components/Menu';
import FooterBar from '../../components/Footer';

import {CapaImg, ContatoInfo, TextAnimated} from './styles';

function Contato(){
  return(
    <>
      <Menu />

      <CapaImg>
        <div className="capa-container">
          <TextAnimated>Para mais informações, entre em contato com a nossa Central de
            Atendimento.
          </TextAnimated>
          <form>

          </form>
        </div>
      </CapaImg>

      <ContatoInfo>
        <div className="card-contato">
          <h1>Telefones</h1>
          <p><a href="tel:08000420499">0800 042 0499</a></p>
          <p><a href="https://api.whatsapp.com/send?phone=559230204050">(92) 3020-4050</a></p>
          <p><a href="tel:9230204061">(92) 3020-4061</a></p>
          <p><a href="tel:9232138224">(92) 3213-8224</a></p>
        </div>

        <div className="card-contato">
          <h1>Email</h1>
          <p><a href="mailto:atendimento@esolution.srv.br">atendimento@esolution.srv.br</a></p>
        </div>

        <div className="card-contato">
          <h1>Endereço</h1>
          <p>Rua Haiti, 248, Qd: 246 - Nova Cidade <br/>
          Manaus-AM
          </p>

        </div>
      </ContatoInfo>

      <FooterBar />
    </>
  );
}

export default Contato;
