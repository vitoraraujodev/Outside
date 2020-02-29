import React, { useEffect, useState } from 'react';

import { Input } from '@rocketseat/unform';

import { Container, CadastrationForm, TypeSelect } from './styles';

import history from '~/services/history';
import api from '~/services/api';

import PictureInput from '~/components/PictureInput';

export default function Store({ location }) { //eslint-disable-line
  const { attraction } = location.state; //eslint-disable-line
  const [picture, setPicture] = useState('');

  useEffect(() => {
    async function loadPicture() {
      const response = await api.get(`/picture/${attraction.picture_id}`);
      setPicture(response.data.url);
    }
    loadPicture();
  });

  function handleBack(route) {
    history.push(route);
  }

  async function handleSubmit(data) {
    await api.put(`/attractions/${attraction._id}`, data); //eslint-disable-line
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
      <CadastrationForm initialData={attraction} onSubmit={handleSubmit}>
        <div>
          <strong>Edição de atração</strong>
          <aside>
            <button type="button" onClick={() => handleBack('/attractions')}>
              VOLTAR
            </button>
            <button type="submit">SALVAR</button>
          </aside>
        </div>

        <PictureInput pictureUrl={picture} name="avatar_id" />

        <strong>TÍTULO</strong>
        <Input name="title" placeholder="Nome do lugar" />

        <strong>DESCRIÇÃO</strong>
        <Input name="description" placeholder="Descrição breve" />

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
