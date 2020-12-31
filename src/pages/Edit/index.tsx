import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Fields from '../../components/Fields';
import api from '../../services/api';
import { Header } from '../Dashboard/styles';

interface StockParam {
  id: string;
}
interface Stock {
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

const Edit: React.FC = () => {
  const { params } = useRouteMatch<StockParam>();
  const { id } = params;
  const [data, setData] = useState<Stock>();

  useEffect(() => {
    api.get(`/stocks/${id}`).then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Header>
        <h1>Edit</h1>
      </Header>
      <Fields method="PUT" specific={data} />
    </>
  );
};

export default Edit;
