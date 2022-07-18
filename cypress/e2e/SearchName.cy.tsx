describe('Search by name page integration test case', () => {
	it('Should navigate to search by name page', () => {
		cy.visit('http://localhost:3000/search/name')
		cy.get('input[name="searchQuery"]')
	})
	it('Should type "Dragon ball z" on input and show results', () => {
		cy.visit('http://localhost:3000/search/name')
		cy.get('input[name="searchQuery"]')
			.type('Dragon ball Z')
			.should('have.value', 'Dragon ball Z')
		cy.get('button[name="submitSearch"]').click()
		cy.get('section').should('be.visible')
	})
	it('Should type "Dragon ball z" on input ,show results,  click "Limpiar resultados" button and clear results', () => {
		cy.visit('http://localhost:3000/search/name')
		cy.get('input[name="searchQuery"]')
			.type('Dragon ball Z')
			.should('have.value', 'Dragon ball Z')
		cy.get('button[name="submitSearch"]').click()
		cy.get('section').should('be.visible')
		cy.get('button[name="clearSearch"]').click()
		cy.get('input[name="searchQuery"]').should('have.value', '')
	})
})
