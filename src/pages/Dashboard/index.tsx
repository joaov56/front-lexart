import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Table, Landing, Header } from './styles';

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
  formattedValue: string;
}
const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Stock[]>([]);

  useEffect(() => {
    async function loadStock(): Promise<void> {
      const response = await api.get('stocks');
      const formated = response.data.map((product: Stock) => {
        return {
          ...product,
          formattedValue: Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'USD',
          }).format(product.price),
        };
      });
      setProducts(formated);
    }

    loadStock();
  }, []);
  async function handleDelete(id: string) {
    await api.delete(`stocks/${id}`);
    setProducts(products.filter(product => product._id !== id));
  }
  return (
    <>
      <Header>
        <h1>ABM Stock</h1>
        <Link to="/create">
          <a href="/">+New</a>
        </Link>
      </Header>
      <Landing>
        <Table>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Quantity</th>
                <th>Product</th>
                <th>Price</th>
                <th>Client</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.quantity}</td>
                  <td>{product.product.name}</td>
                  <td>{product.formattedValue}</td>
                  <td>{product.client.name}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={`/edit/${product._id}`}>
                      <a href="/">Select</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Table>
      </Landing>
    </>
  );
};

export default Dashboard;
