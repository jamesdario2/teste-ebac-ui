/// <reference types="cypress" />
import EnderecoPage from '../support/page-object/endereco.page'
const dadosendereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario,dados.senha)
            
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
       
        EnderecoPage.editarEnderecoEntrega('Joao', 'Silva', 'Baker', 'brunei', 'Rua silva',
        '22', 'Fortal', 'SP', '60821444', '55555555555', 'kkk@gmail.com')

        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
      
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
       
        EnderecoPage.editarEnderecoEntrega(
            dadosendereco[1].nome,
            dadosendereco[1].sobrenome,
            dadosendereco[1].nomeempresa,
            dadosendereco[1].pais,
            dadosendereco[1].endereco,
            dadosendereco[1].numend,
            dadosendereco[1].cidade,
            dadosendereco[1].estado,
            dadosendereco[1].cep,
            dadosendereco[1].telefone,
            dadosendereco[1].email
        )

        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
      
    });



});