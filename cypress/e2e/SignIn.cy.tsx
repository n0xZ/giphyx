describe('Sign in integration test case', () => {
	it('Should navigate to Sign-in page', () => {
		cy.visit('http://localhost:3000/sign-in')
	})
	it('Should navigate to Sign-in page', () => {
		cy.visit('http://localhost:3000/sign-in')
		cy.get('[data-test="signUpButton"]').click()
		cy.url().should(
			'contain',
			'https://github.com/login?client_id=0fd412d525d97e313b4b&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D0fd412d525d97e313b4b%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fapi%252Fauth%252Fcallback%252Fgithub%26response_type%3Dcode%26scope%3Dread%253Auser%2Buser%253Aemail%26state%3DX_QsSPu8htZqyhTIyZc0UUKnjiDqkV0P37BUpwWezgc'
		)
	})
})
