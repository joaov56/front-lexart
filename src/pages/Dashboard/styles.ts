import styled from 'styled-components';

export const Landing = styled.div`
  height: 30rem;

  max-width: 65rem;

  background-color: white;
  border-radius: 8px;
  display: flex;

  margin: 80px auto;
`;

export const Table = styled.table`
  display: flex;
  place-content: center;

  table {
    width: 100%;
    border-spacing: 0;
    width: 65rem;
  }

  td,
  th {
    padding: 16px;
    border-bottom: 1px solid #d9d9d9;
    text-align: center;
  }

  th {
    text-transform: uppercase;
    color: #777;
    font-size: 14px;
  }

  tbody tr:last-child td {
    border: none;
  }
`;
