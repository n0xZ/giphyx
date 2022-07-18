describe('SearchCategory integration test case', () => {
	it('Should navigate to Search category page and redirect if user is not logged in', () => {
		cy.visit('http://localhost:3000/search/category')

		cy.get('h2').should('contain', 'Buscar gifs por categoría')
	})
	it('Should click one of the gifs and navigate to the results', () => {
		cy.visit('http://localhost:3000/search/category')

		cy.get('[data-test="category actions"]').click()
		cy.url().should('include', '/results/actions')
		cy.get('section').should('be.visible')
	})
})
