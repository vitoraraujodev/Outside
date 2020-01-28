import React from 'react';

import { Input } from '@rocketseat/unform';

import { Container, CadastrationForm, TypeSelect } from './styles';

import history from '~/services/history';

import api from '~/services/api';

export default function Store() {
  function handleBack(route) {
    history.push(route);
  }

  async function handleSubmit(data) {
    await api.post('/attractions', data);
    history.push('/attractions');
  }

  const selectOptions = [
    {
      id: 'n',
      title: 'Natureza',
    },
    {
      id: 'h',
      title: 'Histórico',
    },
    {
      id: 'b',
      title: 'Ambos',
    },
  ];

  return (
    <Container>
      <CadastrationForm onSubmit={handleSubmit}>
        <div>
          <strong>Cadastro de atração</strong>
          <aside>
            <button type="button" onClick={() => handleBack('/attractions')}>
              VOLTAR
            </button>
            <button type="submit">SALVAR</button>
          </aside>
        </div>
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
            <TypeSelect
              name="kind"
              placeholder="Selecione..."
              options={selectOptions}
            />
          </article>
        </section>
      </CadastrationForm>
    </Container>
  );
}
