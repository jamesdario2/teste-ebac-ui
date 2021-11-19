/// <reference types="cypress" />

describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {

        cy.visit('produtos')

    });

    // it('Deve completar o pre cadastro com sucesso', () => {

    //     cy.get('[class="product-block grid"]')
    //         //.first()
    //         //.last()
    //         //.eq(3)
    //         .contains('Ariel Roll Sleeve Sweatshirt')
    //         .click()

    // });

    it('Deve adicionar um produto ao carrinho', () => {

        var quantidade = 10

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

    });

    it.only('Deve adicionar um produto ao carrinho - Usando comando costumizado', () => {

        cy.addProdutos('Aero Daily Fitness Tee','M','Black',2)

    });

    it.only('Deve adicionar um produto ao carrinho - Usando comando costumizado', () => {

        cy.addProdutos('Ariel Roll Sleeve Sweatshirt','XS','Red',5)

    });

});