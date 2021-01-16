import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #fbab8c;
  color: #f7f7f7;
  padding: 10px;
  position: fixed;
  bottom: 5%;
  right: 5%;

  svg {
    width: 50px;
    height: 50px;
  }

  &:hover {
    background: ${shade(0.1, '#fbab8c')};
    box-shadow: 0px 3px 6px rgba(228, 178, 131, 0.4);
  }
`;
