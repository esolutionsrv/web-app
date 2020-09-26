import styled from 'styled-components';

export const IntroPlanos = styled.section`
  background: #fff;
  padding: 3rem;

  @media (min-width: 900px) {
    height: 100%;
    margin: 0 8rem;
  }

  div {
    color: #27AE60;
    font-size: 3.4rem;
    margin-top: 8rem;
  }

  .cardImage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33rem;
    height: 58rem;
    overflow: hidden;

    @media (min-width: 900px) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      overflow: hidden;
    }

    img:not(:last-child) {
      margin-bottom: 2rem;
    }

    img {
      width: 100%;

      @media (min-width: 900px) {
        width: 40rem;
      }
    }

    .zoom {
      -webkit-transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);
      -moz-transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);
      -ms-transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);
      -o-transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);
      transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);
    }
    .zoom:hover {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
    }
  }
`;

export const PlanoResidencial = styled.section`
  background-color: #EBFCF2;
  padding: 2rem;

  @media (min-width: 900px) {
    height: 100vh;
  }

  header {
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

export const Vantagem = styled.section`
  background-color: #F8FFFB;
  padding: 2rem;

  @media (min-width: 900px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  header {
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

  div.card__localidade {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 3rem;

    @media (min-width: 900px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

    }

    div:not(:last-child) {
      margin-bottom: 2rem;

      @media (min-width: 900px) {
        margin-bottom: 0;
        margin-right: 2rem;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      transition: all .3s;

      background: #fff;
      border-radius: 1rem;
      padding: 2rem;

      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.08);

      @media (min-width: 900px) {
        flex-direction: column;
      }

      &:hover{
        opacity: 0.76;
        cursor: pointer;
      }

      span {
        color: #616161;
        font-weight: 500;
        margin-left: 1rem;

        @media (min-width: 900px) {
          flex-direction: column;
          margin-top: 2rem;
          font-size: 2rem;
        }
      }

    }
  }
`;
