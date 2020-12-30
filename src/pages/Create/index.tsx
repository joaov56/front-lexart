import React from 'react';
import Fields from '../../components/Fields';

const Create: React.FC = () => {
  return (
    <>
      <h1>Pagina de Criacao</h1>
      <p>Ok</p>
      <Fields method="POST" />
    </>
  );
};

export default Create;
