import {render, screen} from '@testing-library/react'
import List from "./List";

const data = ['html', 'css', 'javascript', 'React']

describe('List component', () => {
  test('List renders', () => {
    render(<List items={data}/>)
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByText('html')).toBeInTheDocument()
  })

  test('List renders without data', () => {
    render(<List />)
    expect(screen.queryByRole('list')).toBeNull()
  })

  test('List snapshot', () => {
    const view = render(<List items={data}/>)
    expect(view).toMatchSnapshot()
  })

  test('List empty snapshot', () => {
    const view = render(<List/>)
    expect(view).toMatchSnapshot()
  })
})
