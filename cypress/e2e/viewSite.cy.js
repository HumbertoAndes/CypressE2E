describe('Pruebas E2E para aplicativo ghost', function() {
    it('Ingreso a ghost con usuario admin y quiero observar que la vista de mi pagina se observa de manera correcta', function() {
        login();
        cy.wait(2000);
        cy.get('a[href="#/site/"]').click();
    })
})

function login(){
    cy.viewport(1280, 1000);
    cy.visit('https://ghost-waki.onrender.com/ghost');
    cy.wait(1000);
    cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co');
    cy.get('input[name="password"]').type('Colombia1*');
    cy.get('#ember10').click();
    cy.url().should('include', '/dashboard');
}

