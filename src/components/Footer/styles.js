import styled from 'styled-components';

export const FooterBar = styled.footer`
  padding: 4rem;
  background-color: #F8F8F8;

  div.menu-container {
    font-size: 1.2rem;

    font-weight: 500;
    margin: 1.5rem 0;

    &:not(:last-child) span {
      margin-right: 2rem;
    }
  }

  div.menu-container span {
    color: #616161;

    &:hover {
      color: #27AE60;
      cursor: pointer;
    }
  }

  div.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div > span {
      font-size: 1.5rem;
      color: #616161;
      font-weight: 500;
    }

    @media (max-width: 56.25em) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    div.socialMedia-container {
      display: flex;
      flex-direction: row;
      align-items: center;

      @media (max-width: 56.25em) {
        margin-top: 1rem;
      }
    }

    div.socialMedia-container > a svg {
      margin-right: 1rem;
      transition: all .5s;

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }

    div.socialMedia-container > p {
      font-size: 2rem;
      color: #616161;
      font-weight: 500;
      margin-right: 2rem;

      > span {
        color: #27AE60;
      }
    }
  }
`;

