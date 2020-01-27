import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #bb3333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 28px;
  background: #fff;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0.5px 0.5px 5px 3px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    strong {
      color: #bb3333;
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      margin: 8px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    span {
      font-weight: bold;
      font-size: 14px;
      text-align: left;
      color: #444;
      margin: 8px 0;
    }
    input {
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;
      &::placeholder {
        color: #999;
      }
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #bb3333;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      margin-bottom: 20px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#bb3333')};
      }
    }
  }
`;
