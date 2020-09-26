import styled from 'styled-components';

export const MenuBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999;
  padding: 5px 15px;
  background-color: #fff;
  height: 70px;
  position: fixed;
  width: 100%;
  z-index: 1000;

  img {
    width: 20rem;
  }

  @media (min-width: 481px) and (max-width: 761px) {
    header {
      position: fixed;
      width: 100%;
    }
    header > h1 {
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    header > h1 {
      margin-right: auto;
    }
  }

  @media (max-width: 991px) {
    header {
      position: fixed;
      width: 100%;
    }
  }

  > h1 {
    margin: 0 auto 0 0;
    padding: 0;
  }

  > h1 a {
    display: block;
    font-size: 3rem;
    text-decoration: none;
    color: #fff;
  }

  > h1 a img {
    height: 50px;
    margin-top: 7px;
  }
`;

