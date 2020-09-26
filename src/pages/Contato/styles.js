import styled, {keyframes} from 'styled-components';

import contatoImg from '../../assets/img/contato.jpg'

export const CapaImg = styled.section`
  width: 100%;
  background-image: linear-gradient(to right bottom, rgba(39, 174, 96, 0.55), rgba(0, 0, 0, 0.35)),
  url(${contatoImg});

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

export const ContatoInfo = styled.section`
  background: #fcfcfc;

  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }

  div.card-contato {
    background: #fff;
    border-radius: 1rem;
    padding: 3rem;
    width: 35rem;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

    h1 {
      color: #27AE60;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    p > a {
      color: #616161;
      text-decoration: none;
    }

    p {
      color: #616161;
      font-size: 1.5rem;

      &:not(:last-child) {
        margin-bottom: 1rem;
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
  animation: ${slideText} 1.5s;

  @media (max-width: 56.25em) {
    width: 100%;
  }
`;
