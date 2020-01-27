import React from 'react';

import { MdCheck, MdClear } from 'react-icons/md';
import { Container, Table, EditLink, DeleteLink } from './styles';

export default function List() {
  return (
    <Container>
      <div>
        <strong>Gerenciando atrações</strong>
        <aside>
          <button type="button">CADASTRAR</button>
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
            <th width="5%" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pedra do Arpoador</td>
            <td>Natureza</td>
            <td align="center">
              <MdCheck size={24} />
            </td>
            <td align="center">
              <MdClear size={24} />
            </td>
            <td>
              <EditLink>editar</EditLink>
              <DeleteLink>apagar</DeleteLink>
            </td>
          </tr>
          <tr>
            <td>Museu Nacional</td>
            <td>Histórico</td>
            <td align="center">
              <MdCheck size={24} />
            </td>
            <td align="center">
              <MdCheck size={24} />
            </td>
            <td>
              <EditLink>editar</EditLink>
              <DeleteLink>apagar</DeleteLink>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
