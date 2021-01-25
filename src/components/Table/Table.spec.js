import React from 'react';
import { render } from '@testing-library/react';

import Table from './Table';

describe('<Table/>', () => {
  it('should render the table content', () => {
    const { container } = render (
      <Table />
    )

    expect(container).toMatchSnapshot()
  })
})
