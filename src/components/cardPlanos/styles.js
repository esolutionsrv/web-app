import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4rem 0;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .cardPlanos {
    background: #FFF;
    padding: 3rem 1rem;
    text-align: center;
    width: 75%;
    color: #8E8E8E;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.08);

    @media (min-width: 900px) {
      width: 28rem;
    }

    .cardPlanos__header {
      h1 {
        color: #27AE60;
        font-weight: 500;
        font: 500 8rem Roboto;
      }

      span {
        color: #27AE60;
        font-weight: bold;
        font: 500 3rem Roboto;
      }
    }

    p {
      color: #8E8E8E;
      text-transform: uppercase;
      margin: 1.5rem 0;
    }

    ul li {
      font-weight: 400;
    }

    ul li:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  .cardPlanos:not(:last-child) {
    margin-bottom: 2.5rem;

    @media (min-width: 900px) {
      margin-right: 2rem;
      margin-bottom: 0;
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .button-container a{
    width: 18rem;
    height: 5rem;
    border-radius: 0.8rem;

    font: 500 2rem Roboto;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: #fff;

    background: #39C574;
    transition: background-color 0.2s;
  }

`;
