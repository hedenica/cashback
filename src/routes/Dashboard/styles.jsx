import styled from 'styled-components';

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  h1 {
    margin-bottom: 30px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;

    svg {
      margin-right: 15px;
      width: 25px;
      height: 25px;
    }
  }
`;
