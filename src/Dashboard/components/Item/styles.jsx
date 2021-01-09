import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  margin: 16px auto;
  border: 1px solid rgba(201, 204, 207, 0.5);
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(52, 60, 88, 0.4);
  transition: box-shadow 200ms ease-in-out;
  padding: 16px;

  &:hover {
    box-shadow: 0px 3px 6px rgba(52, 60, 88, 0.4);
  }

  p {
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

export const Details = styled.button`
  border-bottom: 2px solid #fbab8c;
  width: 70px;

  &:hover {
    border-bottom: 2px solid ${shade(0.2, '#fbab8c')};
  }

  @media (max-width: 425px) {
    font-size: 14px;
    margin: 0 10px;
  }
`;

export const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 0;

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;
