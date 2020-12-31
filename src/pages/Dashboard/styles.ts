import styled from 'styled-components';

export const Header = styled.header`
  max-width: 65rem;
  margin: 0 auto;
  h1 {
    margin-bottom: 10px;
  }

  a {
    font-size: 18px;
    color: white;
    padding: 8px;
    border-radius: 20px;
    text-decoration: none;
    background: rgb(34, 124, 231);
    background: linear-gradient(
      90deg,
      rgba(34, 124, 231, 1) 42%,
      rgba(67, 183, 235, 1) 100%
    );
  }
`;
export const Landing = styled.div`
  height: 30rem;

  max-width: 65rem;

  background-color: white;
  border-radius: 10px;
  display: flex;
  border-top: 8px solid rgba(34, 124, 231, 1);
  -webkit-box-shadow: 10px 10px 39px 0px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 10px 10px 39px 0px rgba(0, 0, 0, 0.32);
  box-shadow: 10px 10px 39px 0px rgba(0, 0, 0, 0.32);

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

  thead {
    margin-top: 10px;
  }
  td,
  th {
    padding: 10px;
    border-bottom: 1px solid #d9d9d9;
    text-align: center;
  }

  th {
    text-transform: uppercase;
    color: #777;
    font-size: 14px;
  }

  td a {
    padding: 6px 10px;
    font-size: 14px;
    border-radius: 20px;
    color: white;
    text-decoration: none;
    background: rgb(26, 134, 0);
    background: linear-gradient(
      90deg,
      rgba(26, 134, 0, 1) 55%,
      rgba(107, 208, 107, 1) 100%,
      rgba(14, 244, 10, 1) 100%,
      rgba(67, 183, 235, 1) 100%
    );
    color: white;
  }

  td button {
    padding: 6px 10px;
    border-radius: 20px;
    color: white;
    background: rgb(235, 35, 35);
    background: linear-gradient(
      90deg,
      rgba(235, 35, 35, 1) 67%,
      rgba(208, 116, 107, 1) 100%,
      rgba(67, 183, 235, 1) 100%
    );
    border: none;
    /* &:nth-child(6) {
      background-color: red;
    } */
  }
`;
