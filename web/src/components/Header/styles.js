import styled from 'styled-components';

export const Container = styled.div`
  background: #bb3333;
  padding: 0 50px;
  border-bottom: 3px solid #fff;
  box-shadow: 0.5px 0.5px 3px 2px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    a {
      color: #ddd;
      font-size: 16px;
      font-weight: bold;
      margin-right: 24px;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    text-align: right;
    strong {
      font-size: 16px;
      margin-bottom: 2px;
      color: #fff;
    }
    button {
      border: none;
      background: #bb3333;
      margin-top: 2px;
      font-size: 13px;
      color: #ddd;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.div`
  align-items: center;
  padding-right: 30px;
  margin-right: 30px;
  border-right: 1px solid #fff;

  strong {
    color: #fff;
    font-weight: bold;
    font-size: 24px;
  }
`;
