import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Table, Landing } from './styles';

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
const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Stock[]>([]);

  useEffect(() => {
    async function loadStock(): Promise<void> {
      const response = await api.get('stocks');
      setProducts(response.data);
    }

    loadStock();
  }, []);
  async function handleDelete(id: string) {
    await api.delete(`stocks/${id}`);
  }
  return (
    <>
      <div className="header">
        <h1>ABM Stock</h1>
      </div>
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
                  <td>{product.price}</td>
                  <td>{product.client.name}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDelete(product._id)}
                    >
                      Excluir
                    </button>
                  </td>
                  <td>
                    <button type="button">Select</button>
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
