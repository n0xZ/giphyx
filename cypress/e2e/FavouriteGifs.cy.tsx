describe('Favourite gifs integration test case', () => {
	it('Should navigate to the favourite-gifs page and display the EmptyGifs component', () => {
		cy.visit('http://localhost:3000/favourite-gifs')
	})
	it('Should navigate to the search-category page, click the actions category, add one of the gif to favourites, navigate to favourite-gifs page and display the selected one.', () => {
		cy.visit('http://localhost:3000/search/category')
		cy.get('div').should('contain', 'Cargando...')
		cy.get('[data-test="category actions"]').click()
		cy.url().should('include', '/results/actions')
		cy.get(
			'[data-test="add The Simpsons Kiss GIF by FOX International Channels"]'
		).click()
		cy.get('[data-test="sidebar"').click()
		cy.get('[data-test="favourite-gifs-nav-item"]').click()
		cy.url().should('include', '/favourite-gifs')
		cy.get('section').should('be.visible')
	})
})
