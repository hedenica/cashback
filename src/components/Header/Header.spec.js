import React from 'react';
import { useSelector } from 'react-redux'
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Header from './Header';

const usersState = {
  users: {
    data: {
      id: '1',
      name: 'Hedênica Morais',
      password: '123456',
      cpf: '40006849814',
      email: 'hedenica@hotmail.com',
    },
    isLogged: true,
  }
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('<Header />', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback(usersState));
  });
  afterEach(() => {
    useSelector.mockClear();
  });

  it("should render the user name", () => {
    const { getByTestId } = render(<Header cashback="00,00" />);
    expect(getByTestId('userInfo').textContent).toEqual(`Bem-vindx, ${usersState.users.data.name}`);
  });

  it("should render the user current balance", () => {
    const { getByTestId } = render(<Header cashback="00,00" />);
    userEvent.click(getByTestId('balance'))
    expect(getByTestId('cashback').textContent).toEqual("R$0.00");
  });
});
