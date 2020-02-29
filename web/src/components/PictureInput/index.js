import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';
import { Container } from './styles';

import addButton from '~/assets/addButton.png';

export default function AvatarInput({ pictureUrl }) {
  const { defaultValue, registerField } = useField('picture_id');
  const [file, setFile] = useState(defaultValue);
  const [preview, setPreview] = useState(pictureUrl || '');

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'picture_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); //eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('/files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview || pictureUrl || addButton} alt="" />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
