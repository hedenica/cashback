import React from 'react';
import { render } from  '@testing-library/react'

import Button from './Button'

describe('<Button />', () => {
  it ('should match the button snapshot', () => {
    const { container } = render(
      <Button type="button">
        Clique aqui
      </Button>
    )
    expect(container).toMatchSnapshot();
  })
});

