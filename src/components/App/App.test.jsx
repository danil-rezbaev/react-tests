import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  test('app component renders', () => {
    render(<App />);
  });

  test('app component render with unnecessary props', () => {
    render(<App data="prop" />);
  });

  test('result default be null', () => {
    render(<App />);
    expect(screen.queryByText(/=/)).toBeNull()
  });

  test('fields are on the page', () => {
    const { container } = render(<App />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const formСontrols = container.querySelectorAll('.form-control');
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const formSelects = container.querySelectorAll('.form-select');

    expect(formСontrols.length).toBe(2);
    expect(formSelects.length).toBe(1);
  });

  test('submit button are on the page', () => {
    const { container } = render(<App />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const buttonSubmit = container.querySelector('button[type="submit"]');

    expect(buttonSubmit).toBeInTheDocument()
  });

  test('the value of the .form-control changes when typing', () => {
    const { container } = render(<App />);
    const textToType = '10'

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const firstArg = container.querySelector(`input[name="firstArg"]`);

    userEvent.type(firstArg, textToType)
    expect(firstArg).toHaveAttribute('value', textToType)
  });

  test('test select has default value', () => {
    render(<App />);
    expect(screen.getByText("+")).toBeInTheDocument();
  });

  test('changing select values works as expected', () => {
    render(<App />);

    userEvent.selectOptions(screen.getByRole('listbox'), ['*'])

    expect(screen.getByRole('option', {name: '+'}).selected).toBe(false)
    expect(screen.getByRole('option', {name: '-'}).selected).toBe(false)
    expect(screen.getByRole('option', {name: '*'}).selected).toBe(true)
  });

  test('testing the addition of numbers', () => {
    const { container } = render(<App />);
    const textToType = '10'
    userEvent.selectOptions(screen.getByRole('listbox'), ['+'])

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const firstArg = container.querySelector(`input[name="firstArg"]`);
    userEvent.type(firstArg, textToType)

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const secondArg = container.querySelector(`input[name="secondArg"]`);
    userEvent.type(secondArg, textToType)

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const buttonSubmit = container.querySelector(`button[type="submit"]`);
    userEvent.click(buttonSubmit)

    expect(screen.getByText(/20/)).toBeInTheDocument();
  });

  test('testing the subtraction of numbers', () => {
    const { container } = render(<App />);
    const textToType = '10'
    userEvent.selectOptions(screen.getByRole('listbox'), ['-'])

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const firstArg = container.querySelector(`input[name="firstArg"]`);
    userEvent.type(firstArg, textToType)

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const secondArg = container.querySelector(`input[name="secondArg"]`);
    userEvent.type(secondArg, textToType)

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const buttonSubmit = container.querySelector(`button[type="submit"]`);
    userEvent.click(buttonSubmit)

    expect(screen.getByText(/0/)).toBeInTheDocument();
  });

  test('testing the multiplication of numbers', () => {
    const { container } = render(<App />);
    const textToType = '10'
    userEvent.selectOptions(screen.getByRole('listbox'), ['*'])

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const firstArg = container.querySelector(`input[name="firstArg"]`);
    userEvent.type(firstArg, textToType)

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const secondArg = container.querySelector(`input[name="secondArg"]`);
    userEvent.type(secondArg, textToType)

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const buttonSubmit = container.querySelector(`button[type="submit"]`);
    userEvent.click(buttonSubmit)

    expect(screen.getByText(/100/)).toBeInTheDocument();
  });

  test('App snapshot', () => {
    const view = render(<App />)
    expect(view).toMatchSnapshot()
  })
})
