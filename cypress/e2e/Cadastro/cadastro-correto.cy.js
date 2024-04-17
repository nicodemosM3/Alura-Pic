import Cadastro from '../../support/pages/cadastro/pagina-cadastro' //Automação para testar o cadastro com sucesso da alura Pic

describe('Página de cadastro', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    })
        
        it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
          
          Cadastro.acessarPaginaDeCadastro();
          Cadastro.preencherFormulario();
          Cadastro.submeterCadastro()
          
        })
    })
  
