import React from 'react';

import { Input } from '@rocketseat/unform';

import { Container, CadastrationForm } from './styles';

import history from '~/services/history';

export default function Store() {
  function handleBack(route) {
    history.push(route);
  }

  return (
    <Container>
      <div>
        <strong>Cadastro de atração</strong>
        <aside>
          <button type="button" onClick={() => handleBack('/attractions')}>
            VOLTAR
          </button>
          <button type="button">SALVAR</button>
        </aside>
      </div>
      <CadastrationForm>
        <strong>TÍTULO</strong>
        <Input name="title" placeholder="Nome do lugar" />

        <strong>DESCRIÇÃO</strong>
        <Input name="description" placeholder="Descrição breve" />

        <strong>HISTÓRIA</strong>
        <Input name="history" placeholder="História breve" />

        <section>
          <article>
            <strong>LATITUDE</strong>
            <Input name="latitude" placeholder="" />
          </article>
          <article>
            <strong>LONGITUDE</strong>
            <Input name="longitude" placeholder="" />
          </article>
          <article>
            <strong>TIPO</strong>
            <Input name="kind" placeholder="Tipo de atração" />
          </article>
        </section>
      </CadastrationForm>
    </Container>
  );
}
