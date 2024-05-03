describe('Pruebas E2E para aplicativo ghost', function() {
    it('Ingreso a ghost con usuario admin y resgistro de un nuevo tag', function() {
        login();
        cy.wait(2000);
        cy.get('a[id="ember27"]').click();
        cy.wait(2000);
        cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
        cy.wait(2000);
        cy.get('input[id="tag-name"]').type("Tag Name Test");
        cy.wait(2000);
        cy.get('input[name="slug"]').type("prueba");
        cy.wait(2000);
        cy.get('textarea[name="description"]').type("description test for ghost");
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000);        
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

