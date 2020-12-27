import React from 'react';
import api from '../../services/api';
import { Table, Landing } from './styles';

const Dashboard: React.FC = () => {
  async function handleDelete(id: number) {
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1242</td>
                <td>22</td>
                <td>300</td>
                <td>$2,50</td>
                <td>
                  <button type="button" onClick={() => handleDelete(1)}>
                    Excluir
                  </button>
                </td>
                <td>
                  <button type="button">Select</button>
                </td>
              </tr>
            </tbody>
          </table>
        </Table>
      </Landing>
    </>
  );
};

export default Dashboard;
