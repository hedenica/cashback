import React from 'react';
import { render } from '@testing-library/react'

import Modal from './Modal'

describe('<Modal />', () => {
  it('should return the modal component', () => {
    const isOpen = true 

    const { container } = render(
      <Modal 
        isOpen
        onClose={() => !isOpen}
        firstModalContent="Lado esquerdo do Modal"
        secondModalContent="Lado direito do Modal"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
