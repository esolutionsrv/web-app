import styled, {keyframes} from 'styled-components';
import capaImg from '../../assets/img/capahome.jpg';

export const Content = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

export const CapaImg = styled.section`
  width: 100%;
  background-image: linear-gradient(to right bottom, rgba(39, 174, 96, 0.1), rgba(0, 0, 0, 0.35)),
  url(${capaImg});

  /* Full height */
  height: 85%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;

  div.capa-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding: 0 5rem;
  }
`;

export const AreaCliente = styled.section`
  background-color: #39C574;
  padding: 5rem;
  color: #fff;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  }

  .intro-AreaCliente {
    @media (min-width: 700px) {
      width: 50%;
    }

    h1 {
      font-weight: 500;
      margin-top: 5rem;
    }

    span {
      font-weight: bold;
      font-size: 2rem;
    }

    p {
      font-size: 2.5rem;
      font-weight: 300;
      margin: 5rem 0;
      line-height: 3.5rem;
    }

    h1::after {
      content: '';
      border-bottom: 3px solid #fff;
      width: 65%;
      display: block;
      margin-bottom: 2rem;
    }
  }
`;

export const CardActions = styled.div`
  .card-feature {
    background: rgba(255, 255, 255, 0.86);
    border-radius: 1rem;
    padding: 2rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 1rem;
    transition: all .3s;

    &:hover{
      opacity: 0.76;
      cursor: pointer;
    }

    span {
      color: #616161;
      font-weight: 500;
      margin-left: 1rem;
    }
  }
`;

export const BandaLargaResidencial = styled.section`
  background-color: #fff;
  padding: 5rem;
  color: #616161;

  @media (min-width: 900px) {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    width: 100%;

    @media (min-width: 900px) {
      width: 50rem;
      height: 35rem;
      margin: 2rem;
    }
  }

  div {
    @media (min-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    h1 {
      margin-top: 3rem;
      font-size: 2.8rem;
      font-weight: 400;

      @media (min-width: 900px) {
        font-size: 4rem;
      }
    }

    span {
      margin-top: 3rem;
      font-size: 3.4rem;
      font-weight: 500;
      color: #39C574;

      @media (min-width: 900px) {
        font-size: 4.5rem;
      }
    }

    p {
      font-size: 2rem;
      margin-top: 3.5rem;
      color: #666;
      font-weight: 400;
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .button-container a{
    width: 30rem;
    height: 7rem;
    border-radius: 0.8rem;

    font: 500 2.5rem Roboto;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: #fff;

    background: #39C574;
    transition: background-color 0.2s;
  }
`;

export const PlanoResidencial = styled.section`
  background-color: #EBFCF2;
  padding: 2rem;

  @media (min-width: 900px) {
    height: 100vh;
  }

  section {
    text-align: center;
    margin: 3rem 0;

    h1 {
      color: #8E8E8E;
      font-weight: bold;
      font-size: 4rem;
    }

    p {
      color: #27AE60;
      font-weight: 400;
      font-size: 3rem;
    }
  }
`;

export const Section01 = styled.section`
  background-color: #62DB96;
  padding: 5rem 2rem;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-weight: 500;
    margin: 3rem;
  }

  div.container-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 3rem;

    @media (min-width: 900px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }

  div.card__localidade:not(:last-child) {
    margin-right: 1rem;

    @media (min-width: 900px) {
      margin-right: 5rem;
    }
  }

  div.card__localidade {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    }

    div:not(:last-child) {
      margin-bottom: 2rem;

      @media (min-width: 900px) {
        margin-bottom: 1rem;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 17rem;

      background: rgba(255, 255, 255, 0.86);
      border-radius: 1rem;
      padding: 1.4rem;

      transition: all .3s;

      @media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 37rem;
        padding: 2rem;
      }

      &:hover{
        opacity: 0.76;
        cursor: pointer;
      }

      span {
        color: #616161;
        font-weight: 500;
        margin-left: 1rem;
        font-size: 1.2rem;

        @media (min-width: 900px) {
          flex-direction: column;
          font-size: 1.6rem;
        }
      }

    }
  }
`;

const slideText = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;

export const TextAnimated = styled.p`
  color: #fff;
  font-size: 3rem;
  width: 50%;
  font-weight: 500;
  animation: ${slideText} 2s;

  @media (max-width: 56.25em) {
    width: 100%;
  }
`;
