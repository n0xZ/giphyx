describe('Home page', () => {
	it('Should visit homepage', () => {
		cy.visit('http://localhost:3000/')
	}),
		it('Should display homepage image', () => {
			cy.visit('http://localhost:3000/')
			cy.get('img').should('be.visible')
		})
	it('Should display homepage title', () => {
		cy.visit('http://localhost:3000/')
		cy.get('h1').should(
			'contain',
			'Busque sus gifs favoritos de Giphy y guardelos.'
		)
	})
	it('Should redirect to Login if ', () => {
		cy.visit('http://localhost:3000/')
		cy.get('[data-test="signUpButton"]').click()
		cy.url().should('include', '/sign-in')
	})
})
