import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  test('app component renders', () => {
    render(<App />);
  });

  test('typing in Searchbox works', () => {
    render(<App />);

    expect(screen.queryByDisplayValue(/React/)).toBeNull()

    userEvent.type(screen.getByRole('textbox'), 'React')

    expect(screen.getByDisplayValue(/React/)).toBeInTheDocument()
  });

  test('search filter is working', () => {
    render(<App />);

    userEvent.type(screen.getByRole('textbox'), 'java')

    expect(screen.queryByText(/React/)).toBeNull()
    expect(screen.getByText(/javascript/)).toBeInTheDocument()
  });

  test('App snapshot', () => {
    const view = render(<App />)
    expect(view).toMatchSnapshot()
  })
})
