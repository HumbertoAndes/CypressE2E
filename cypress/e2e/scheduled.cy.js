describe('Pruebas E2E schedules',  { 
    viewportHeight: 689.17,
    viewportWidth: 1030,},() => {
  it('Publish schedules ', () => {
    cy.visit('https://ghost-waki.onrender.com/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('AvilaLina1')
    cy.get('#ember5').click()
    cy.get('a[title="Scheduled"]').click()
    cy.wait(2000)    
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click()
    cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').type('Post Pruebas Automatizadas')
    cy.get('div[class="kg-prose"]').type('Esta es un prueba automatizada para la universidad de los andes')
    cy.contains('Publish').click()
    cy.get('button[class="gh-publish-setting-title "]').click()
    cy.get('div[class="gh-radio "]').click()
    cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click()
    cy.get('button[data-test-button="confirm-publish"]').click()
    cy.get('button[class="gh-btn-editor gh-publish-back-button"]').click()
    cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').click()
    cy.get('h3[class="gh-content-entry-title"]').contains('Post Pruebas Automatizadas')
    })
})