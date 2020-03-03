import React from 'react';
import { toast } from 'react-toastify';

import { Input } from '@rocketseat/unform';

import { Container, CadastrationForm, TypeSelect } from './styles';

import history from '~/services/history';
import api from '~/services/api';

import PictureInput from '~/components/PictureInput';

export default function Store({ location }) { //eslint-disable-line
  const { request } = location.state; //eslint-disable-line

  function handleBack(route) {
    history.push(route);
  }

  async function handleDelete(id) {
    await api.delete(`/requests/${id}`);
  }

  async function handleSubmit(data) {
    try {
      await api.post(`/attractions`, data);
      history.push('/requests');
    } catch (e) {
      toast.error('Erro no cadastro');
    }
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
      <CadastrationForm initialData={request} onSubmit={handleSubmit}>
        <div>
          <strong>Analise de Pedido</strong>
          <aside>
            <button type="button" onClick={() => handleBack('/requests')}>
              VOLTAR
            </button>
            <button type="submit" onClick={() => handleDelete(request.id)}>
              DESCARTAR
            </button>
            <button type="submit">SALVAR</button>
          </aside>
        </div>

        <PictureInput name="picture_id" />

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
