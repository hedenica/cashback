import React from 'react';
import { render } from '@testing-library/react'

import Result from './Result';
import Button from '../Button'
import Image from '../../assets/img/logo.png';


describe('<Result />', () => {
  it('should render the result component with image', () => {
    const { container } = render (
      <Result image={Image} callToAction={
        <Button>
          Clique aqui
        </Button>
      } />
    )
    expect(container).toMatchSnapshot();
  });
});
