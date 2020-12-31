import styled from 'styled-components';

export const FieldsContainer = styled.div`
  display: flex;

  margin: 90px auto;
  width: 700px;
  background: #ffffff;
  border: 1px solid #d3e2e5;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 20px 0;

  button {
    font-size: 18px;
    color: white;
    padding: 4px 8px;
    border-radius: 20px;
    text-decoration: none;
    background: rgb(34, 124, 231);
    background: linear-gradient(
      90deg,
      rgba(34, 124, 231, 1) 42%,
      rgba(67, 183, 235, 1) 100%
    );
    border: none;
    margin-top: 10px;
    cursor: pointer;
    width: 90px;
    margin: 10px auto;
  }
`;

export const Field = styled.div`
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  }

  input {
    width: 300px;
    height: 40px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    outline: none;
    color: #5c8599;
    height: 25px;
    padding: 0 16px;
    border-radius: 8px;
  }
`;
