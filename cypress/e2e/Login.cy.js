describe('Pruebas de Monos para el inicio de sesión en Ghost', function() {
    it('Visita la página de inicio de sesión y sobrevive a la interacción de los Monos', function() {
        // Visita la página de inicio de sesión de Ghost
        cy.visit('https://ghost-waki.onrender.com/ghost');

        // Espera 1 segundo para asegurar que la página se haya cargado completamente
        cy.wait(1000);

        // Ingresa el correo electrónico en el campo de correo electrónico
        cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co');

        // Ingresa la contraseña en el campo de contraseña
        cy.get('input[name="password"]').type('Colombia1*');

	cy.get('#ember10').click();

	cy.url().should('include', '/dashboard');

    })
})
