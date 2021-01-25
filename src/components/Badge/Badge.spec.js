import React from 'react';
import { render } from '@testing-library/react'

import Badge from './Badge'

describe('<Badge />', () => {
  it('should render the badge component with the default variation and size', () => {
    const { container } = render(
    <Badge>
      Aprovado
    </Badge>)

    expect(container).toMatchSnapshot();
  });

  it('should render the badge component with success variation and default size', () => {
    const { container } = render(
    <Badge variation="success">
      Aprovado
    </Badge>)

    expect(container).toMatchSnapshot();
  });

  it('should render the badge component with warning variation and default size', () => {
    const { container } = render(
    <Badge variation="warning">
      Em revisão
    </Badge>)

    expect(container).toMatchSnapshot();
  });

  it('should render the badge component with danger variation and default size', () => {
    const { container } = render(
    <Badge variation="danger">
      Reprovado
    </Badge>)

    expect(container).toMatchSnapshot();
  });

  it('should render the badge component with default variation and small size', () => {
    const { container } = render(
    <Badge size="small">
      Aprovado
    </Badge>)

    expect(container).toMatchSnapshot();
  });

  it('should render the badge component with default variation and large size', () => {
    const { container } = render(
    <Badge size="large">
      Aprovado
    </Badge>)

    expect(container).toMatchSnapshot();
  });
})
