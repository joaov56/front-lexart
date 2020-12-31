/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
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
  const [product, setProduct] = useState<string | undefined>('');
  const [quantity, setQuantity] = useState<number | undefined>();
  const [price, setPrice] = useState<number | undefined>();
  const [client, setClient] = useState<string | undefined>('');

  useEffect(() => {
    setProduct(specific?.product.name);
    setQuantity(specific?.quantity);
    setPrice(specific?.price);
    setClient(specific?.client.name);
  }, [specific]);

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
      alert('Sucessfully Created');
      history.push('/');
    } else if (method === 'PUT') {
      await api.put(`/stocks/${specific?._id}`, data);
      alert('Sucessfully Edited');
      history.push('/');
    }
  }

  return (
    <FieldsContainer>
      <Field>
        <label htmlFor="product_name">
          Product:
          <input
            type="text"
            id="product"
            value={product}
            onChange={e => setProduct(e.target.value)}
          />
        </label>
      </Field>
      <Field>
        <label htmlFor="quantity">
          Quantity:
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />
        </label>
      </Field>
      <Field>
        <label htmlFor="price">

          Price:
          <input
            type="number"
            id="price"
            onChange={e => setPrice(Number(e.target.value))}
            value={price}
          />
        </label>
      </Field>
      <Field>
        <label htmlFor="client">
          Client:
          <input
            type="text"
            id="client"
            onChange={e => setClient(e.target.value)}
            value={client}
          />
        </label>
      </Field>
      <button type="button" onClick={handleSubmit}>
        Send
      </button>
    </FieldsContainer>
  );
};

export default Fields;
