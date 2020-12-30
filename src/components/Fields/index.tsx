/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { FieldsContainer, Field } from './styles';

interface MethodProps {
  method: string;

  specific?:
    | {
        _id: string;
        product: {
          name: string;
        };
        quantity: number;
        price: number;
        client: {
          name: string;
        };
      }
    | undefined;
}

const Fields: React.FC<MethodProps> = ({ specific, method }) => {
  const history = useHistory();
  const [product, setProduct] = useState(specific?.product.name);
  const [quantity, setQuantity] = useState(specific?.quantity);
  const [price, setPrice] = useState(specific?.price);
  const [client, setClient] = useState(specific?.client.name);

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
    if (method === 'POST') {
      await api.post('stocks', data);
      alert('Sucessfully Created ');
      history.push('/');
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
            value={specific?.product.name}
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
            value={specific?.quantity}
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
            value={specific?.price}
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
            value={specific?.client.name}
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
