describe('Página de login', () => { //Automação para testar o login correto na Alura Pic

    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

        it('Deve preencher os campos do formulário corretamente e realizar login', () => {
            cy.login('carowl', '12345678')
            })

})
