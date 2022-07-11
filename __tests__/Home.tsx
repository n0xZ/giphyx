import { render } from '@testing-library/react'
import HomePage from '~/pages/index'

describe('Home Page test case', () => {
	it('Renders the page without any trouble', () => {
		const { container } = render(<HomePage />)
    expect(container).toBeTruthy()

	})
})
