import React, { useState } from 'react';

import { Input } from '@rocketseat/unform';

import { Container, CadastrationForm, TypeSelect } from './styles';

import history from '~/services/history';

export default function Store() {
  const [type, setType] = useState('n');

  function handleBack(route) {
    history.push(route);
  }

  function handleSelect(event) {
    console.tron.log(event.target.value);
    setType(event.target.value);
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
            <TypeSelect value={type} onChange={handleSelect}>
              <option value="n">Natureza</option>
              <option value="h">Historico</option>
              <option value="b">Ambos</option>
            </TypeSelect>
          </article>
        </section>
      </CadastrationForm>
    </Container>
  );
}
