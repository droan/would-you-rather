import { screen } from '@testing-library/react'

import { renderWithStore } from 'utils/testing'
import App from './App'


test('renders navbar links', () => {
  renderWithStore(<App />)
  expect(screen.getByText(/Home/i)).toBeInTheDocument()
  expect(screen.getByText(/New Question/i)).toBeInTheDocument()
  expect(screen.getByText(/Leader Board/i)).toBeInTheDocument()
});
