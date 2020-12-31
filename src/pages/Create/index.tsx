import React from 'react';
import Fields from '../../components/Fields';
import { Header } from '../Dashboard/styles';

const Create: React.FC = () => {
  return (
    <>
      <Header>
        <h1>Create</h1>
      </Header>
      <Fields method="POST" />
    </>
  );
};

export default Create;
