describe('Pruebas exploración de blogs ghost',  { 
  viewportHeight: 689.17,
  viewportWidth: 1030,},() => {
it('delete drafts', () => {
  cy.visit('https://ghost-waki.onrender.com/ghost')
  cy.wait(1000)
  cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
  cy.get('input[name="password"]').type('AvilaLina1')
  cy.get('#ember5').click()
  cy.get('a[title="Drafts"]').click()
  cy.wait(2000)
  cy.get('span.gh-post-list-cta.edit').first().click()
  cy.get('button[ title="Settings"]').click()
  cy.get('button[class="gh-btn gh-btn-outline gh-btn-icon gh-btn-fullwidth"]').type('{downarrow}')
  cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
  })

it('delete post publish', () => {
  cy.visit('https://ghost-waki.onrender.com/ghost')
  cy.wait(1000)
  cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
  cy.get('input[name="password"]').type('AvilaLina1')
  cy.get('#ember5').click()
  cy.get('a[title="Drafts"]').click()
  cy.wait(2000)
  cy.get('div[class="gh-contentfilter-menu gh-contentfilter-type gh-contentfilter-selected"]').click()
  cy.get('').click()
})  
})