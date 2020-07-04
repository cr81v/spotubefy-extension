import React from 'react'
import { render } from '@testing-library/react'
import Extension from './extension'

test('renders learn react link', () => {
  const { getByText } = render(<Extension />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
