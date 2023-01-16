import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Search from "./Search";

const onChange = jest.fn()

describe('Search component', () => {
  test('Search renders', () => {
    render(
      <Search
        value=''
        onChange={onChange}
      >
        Find:
      </Search>
    )

    expect(screen.getByText('Find:')).toBeInTheDocument()
  })

  test('Search without children', () => {
    render(
      <Search
        value=''
        onChange={onChange}
      />
    )

    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  test('Search without placeholder', () => {
    render(
      <Search
        value=''
        onChange={onChange}
      />
    )

    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument()
  })

  test('custom placeholder works correctly', () => {
   const placeholderExample = 'field'

    render(
      <Search
        value=''
        onChange={onChange}
        placeholder={placeholderExample}
      />
    )

    expect(screen.getByPlaceholderText(placeholderExample)).toBeInTheDocument()
  })

  test('onChange works', () => {
    render(
      <Search
        value=''
        onChange={onChange}
      >
        Find:
      </Search>
    )

    userEvent.type(screen.queryByRole('textbox'), 'React')

    expect(onChange).toBeCalledTimes(5)
  })

  test('dynamic styles works', () => {
    render(<Search value="abc" onChange={onChange}/>)

    expect(screen.getByRole('textbox')).toHaveClass('filled')
    expect(screen.getByRole('textbox')).toHaveClass('input')
    expect(screen.getByText('Search')).toHaveClass('label')
  })

  test('Search shapshot', () => {
    const view = render(
      <Search
        value=''
        onChange={onChange}
      >
        Find:
      </Search>
    )

    expect(view).toMatchSnapshot()
  })
})
