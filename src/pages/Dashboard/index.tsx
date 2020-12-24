import React from 'react';
import { Table, Landing } from './styles';

const Dashboard: React.FC = () => {
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
              </tr>
            </tbody>
          </table>
        </Table>
      </Landing>
    </>
  );
};

export default Dashboard;
