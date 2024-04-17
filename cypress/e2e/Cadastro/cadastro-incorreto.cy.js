describe('Página de cadastro', () => { //Automação para testar o cadastro incorreto na Alura Pic

    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

    it('Verifica mensagens de campos obrigatórios na página de cadastro', () => {
        cy.get('[data-test="register"]').click();
        cy.get('[data-test="btnRegister"]').click();
        cy.get('[data-test="btnRegister"]').click();
        cy.contains('Email is required!').should('be.visible');
        cy.contains('Full name is required!').should('be.visible');
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
    })
})
