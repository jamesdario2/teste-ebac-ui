
class EnderecoPage{

    editarEnderecoFaturamento() {

    }

    editarEnderecoEntrega(nome, sobrenome, nomeempresa, pais, endereco, endnum, cidade, estado, cep, telefone, email ) {
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(nomeempresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        // ou pode ser tambem  
        //cy.get('#select2-billing_country-container').click().type(pais+'{enter}').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(endnum)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#billing_state').clear().type(estado)
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()

    }

}

export default new EnderecoPage()
