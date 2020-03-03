import styled from 'styled-components';

import { Form, Select } from '@rocketseat/unform';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    strong {
      font-size: 24px;
      color: #444;
    }
    aside {
      align-items: center;
      margin: 0;
      button {
        background: #bb3333;
        border: 0;
        border-radius: 4px;
        height: 36px;
        width: 140px;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        overflow: hidden;
        transition: background 0.2s;
        margin-left: 16px;
        &:hover {
          background: ${darken(0.05, '#bb3333')};
        }
        &:first-child {
          background: #ccc;
          &:hover {
            background: ${darken(0.08, '#ccc')};
          }
        }
      }
    }
  }
`;

export const CadastrationForm = styled(Form)`
  background: #fff;
  border-radius: 4px;
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  input {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 45px;
    font-size: 19px;
    padding: 0 15px;
    margin-bottom: 24px;
    color: #333;
    &::placeholder {
      color: #999;
    }
  }
  strong {
    font-size: 16px;
    color: #444;
    margin-bottom: 6px;
    &:first-child {
      margin-top: 0;
    }
  }

  section {
    display: flex;
    flex-direction: row;
    article {
      display: flex;
      flex-direction: column;
      margin-right: 16px;
      input {
        width: 100%;
      }
      &:last-child {
        margin-right: 0;
        margin-left: auto;
      }
    }
  }
`;

export const TypeSelect = styled(Select)`
  height: 45px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 19px;
  color: #666;
  padding: 0 15px;
  width: 280px;
`;
