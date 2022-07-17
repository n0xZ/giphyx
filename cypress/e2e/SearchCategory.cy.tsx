describe('SearchCategory integration test case', () => {
	it('should navigate to Search category page', () => {
		cy.visit('http://localhost:3000/search/category')

		cy.get('h2').should(
			'contain',
			'Para poder acceder a Giphyx, se debe iniciar sesión.'
		)
		cy.debug()
	})
})
