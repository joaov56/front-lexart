/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import api from '../../services/api';
import { FieldsContainer, Field } from './styles';

interface MethodProps {
  method: string;
}

const Fields: React.FC<MethodProps> = props => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [client, setClient] = useState('');

  async function handleSubmit() {
    const data = {
      product: {
        name: product,
      },
      quantity,
      price,
      client: {
        name: client,
      },
    };

    // console.log(props.method);
    if (props.method === 'POST') {
      await api.post('stocks', data);
      alert('Sucessfully Created ');
    }
  }
  return (
    <FieldsContainer>
      <Field>
        <label htmlFor="product_name">
          Produto
          <input
            type="text"
            id="product"
            onChange={e => setProduct(e.target.value)}
          />
        </label>
      </Field>
      <Field>
        <label htmlFor="quantity">
          Quantidade
          <input
            type="text"
            id="quantity"
            onChange={e => setQuantity(e.target.value)}
          />
        </label>
      </Field>
      <Field>
        <label htmlFor="price">
          Preço
          <input
            type="text"
            id="price"
            onChange={e => setPrice(e.target.value)}
          />
        </label>
      </Field>
      <Field>
        <label htmlFor="client">
          Cliente
          <input
            type="text"
            id="client"
            onChange={e => setClient(e.target.value)}
          />
        </label>
      </Field>
      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
    </FieldsContainer>
  );
};

export default Fields;
