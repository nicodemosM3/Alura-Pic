//Testando via API para verificar a busca a foto exata
describe('Buscar fotos e dados', () => {

    //it('buscar fotos do usuário', () => {        
       // cy.request({
            //method: 'POST' ,
            //url: 'http://localhost:3000/user/login',
            //body: Cypress.env()
        //}).then((res) => {
           // expect(res.status).to.be.equal(200)
           // expect(res.body).is.not.empty
           // expect(res.body).to.have.property('id')
           // expect(res.body.id).to.be.equal(1)  
        })
        it('Fotos do usuário', () => {
            cy.request({
                method: 'GET' ,
                url: 'http://localhost:3000/carowl/photos?page=1'
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body[0]).to.have.property('description')
                expect(res.body[0].description).to.be.equal('pilates')
                
            })
        })
   