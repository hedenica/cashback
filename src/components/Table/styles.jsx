import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: rgb(251, 171, 140);
  background: linear-gradient(
    38deg,
    rgba(251, 171, 140, 1) 0%,
    rgba(247, 141, 167, 1) 54%
  );

  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f7f7f7;

  h3 {
    margin-bottom: 40px;
    font-size: 25px;
  }

  span {
    margin: 20px auto;
    font-size: 13px;
  }

  @media (max-width: 767px) {
    border-radius: 0;
  }
`;

export const Container = styled.table`
  width: 100%;
  text-align: center;
  letter-spacing: 0.5px;
  border-collapse: collapse;
  font-size: 14px;

  thead {
    font-weight: bold;
  }

  table,
  td,
  th {
    border: 2px solid #f7f7f7;
    padding: 5px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
