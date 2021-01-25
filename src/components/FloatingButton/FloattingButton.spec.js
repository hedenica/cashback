import React from 'react';
import { render } from  '@testing-library/react'

import FloatingButton from './FloatingButton'

describe('<FloatingButton />', () => {
  it('should match the floating button snapshot', () => {
    const { container } = render(
      <FloatingButton showModal={() => true} />
    )  
    expect(container).toMatchSnapshot();
  });
})


