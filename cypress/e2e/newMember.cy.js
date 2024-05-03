describe('Pruebas E2E para aplicativo ghost', function() {
    it('Ingreso a Ghost con usuario administrador y registro de nuevo miembro', function() {
        login();
        cy.wait(2000);
        cy.get('#ember28').click();
        cy.wait(2000);
        cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
        cy.wait(2000);
        cy.get('input[name="name"]').type('Pepito Pruebas');
        cy.wait(2000);
        cy.get('input[name="email"]').type('PepitoPruebas@andes.edu.co');
        cy.wait(2000);
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type('LabelPepito');
        cy.wait(2000);
        cy.contains('li[class="ember-power-select-option"]', 'LabelPepito').click();
        cy.get('textarea[name="note"]').type('Esta nota es para hacer pruebas al modulo de members');
        cy.wait(3000);
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000);
        cy.get('svg[viewBox="0 0 24 24"]').should('be.visible');
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

