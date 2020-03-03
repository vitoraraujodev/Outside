import React, { useState, useEffect } from 'react';

import { Container, Table, ShowLink, DeleteLink } from './styles';

import api from '~/services/api';

export default function List() {
  const [requests, setRequests] = useState([]);

  async function handleDelete(id) {
    await api.delete(`/requests/${id}`);
  }

  useEffect(() => {
    async function loadRequests() {
      const response = await api.get('/requests');

      setRequests(response.data);
    }
    loadRequests();
  }, [requests]);

  return (
    <Container>
      <div>
        <strong>Gerenciando pedidos</strong>
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
            <th width="5%" /> {/*eslint-disable-line */}
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr>
              <td>{request.title}</td>
              <td>
                {request.kind === 'n' ? 'Natureza' : null}
                {request.kind === 'h' ? 'Histórico' : null}
                {request.kind === 'b' ? 'Ambos' : null}
              </td>
              <td>
                <ShowLink
                  to={{
                    pathname: `/requests/show/${request.id}`,
                    state: { request },
                  }}
                >
                  mostrar
                </ShowLink>
                <DeleteLink onClick={() => handleDelete(request.id)}>
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
