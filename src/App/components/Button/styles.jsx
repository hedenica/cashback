import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #fbab8c;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #666360;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.5s;

  &:hover {
    background: ${shade(0.2, '#fbab8c')};
  }
`;
