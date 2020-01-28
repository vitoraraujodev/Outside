import React, { useState, useEffect } from 'react';

import { MdCheck, MdClear } from 'react-icons/md';
import { Container, Table, EditLink, DeleteLink } from './styles';

import history from '~/services/history';
import api from '~/services/api';

export default function List() {
  const [attractions, setAttractions] = useState([]);

  function handleCadastration(route) {
    history.push(route);
  }

  async function handleDelete(id) {
    await api.delete(`/attractions/${id}`);
  }

  useEffect(() => {
    async function loadAttractions() {
      const response = await api.get('/attractions');
      const formattedAttractions = response.data.map(attraction => {
        return {
          ...attraction,
          latitude: attraction.location.coordinates[1],
          longitude: attraction.location.coordinates[0],
        };
      });
      setAttractions(formattedAttractions);
    }
    loadAttractions();
  }, [attractions]);

  return (
    <Container>
      <div>
        <strong>Gerenciando atrações</strong>
        <aside>
          <button
            type="button"
            onClick={() => handleCadastration('/attractions/new')}
          >
            CADASTRAR
          </button>
          <input placeholder="Buscar atração" />
        </aside>
      </div>

      <Table>
        <thead>
          <tr>
            <th width="32%" align="left">
              TÍTULO
            </th>
            <th width="18%" align="left">
              TIPO
            </th>
            <th width="18%" align="center">
              DESCRIÇÃO
            </th>
            <th width="18%" align="center">
              HISTÓRIA
            </th>
            <th width="5%" /> {/*eslint-disable-line */}
          </tr>
        </thead>
        <tbody>
          {attractions.map(attraction => (
            <tr>
              <td>{attraction.title}</td>
              <td>Natureza</td>
              <td align="center">
                {attraction.description ? (
                  <MdCheck size={24} />
                ) : (
                  <MdClear size={24} />
                )}
              </td>
              <td align="center">
                {attraction.history ? (
                  <MdCheck size={24} />
                ) : (
                  <MdClear size={24} />
                )}
              </td>
              <td>
                <EditLink
                  to={{
                    pathname: `/attractions/edit/${attraction._id}`,
                    state: { attraction },
                  }}
                >
                  editar
                </EditLink>
                <DeleteLink onClick={() => handleDelete(attraction._id)}>
                  apagar
                </DeleteLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
