//
//
describe('Login functionality and security', () => {
    beforeEach(() => {
        cy.visit('https://app.cymulate.com/login')
    })

    // 1 . Verify that the login page loads correctly
    //by checking the presence of the login form and all its elements.

    it('displays the login form', () => {
        cy.get('.login-container').should('be.visible')
        cy.get('[id="email"]').should('be.visible')
        cy.get('[id="password"]').should('be.visible')
        cy.get('[test-id="sign-in"]').should('be.visible')
    })
    //2. Verify that the user can enter their email and password and click the login button.

    it('allows the user to enter their credentials and login', () => {
        cy.get('[id="email"]').type('testuser1@example.com')
        cy.get('[id="password"]').type('testpassword')
        cy.get('[test-id="sign-in"]').click()

    })

    //3.Verify that the user is prompted for their
    // email and password if they try to login without entering any information.

    it('prompts the user to enter their credentials if they try to login without entering any information', () => {
        cy.get('[test-id="sign-in"]').click()
        cy.get('[data-test-id="alert"]').should('contain', 'Email address can\'t be empty')
    })

    // 4.Verify that the user is notified if their login credentials are incorrect.

    it('notifies the user if their login credentials are incorrect', () => {
        cy.get('[id="email"]').type('testuser@example.com')
        cy.get('[id="password"]').type('wrongpassword')
        cy.get('[test-id="sign-in"]').click()
        cy.get('[data-test-id="alert"]').should('contain', 'Wrong email address or password')
    })

    // 5.Verify that the user is directed to the correct page after successful login.


    it('redirects the user to the correct page after successful login', () => {
        cy.get('[id="email"]').type('candidate_user@cymulate.com')
        cy.get('[id="password"]').type('Aa123456')
        cy.get('[test-id="sign-in"]').click()
        cy.get('[test-id="topbar-tab"]').should('be.visible')

    })

    // 5.1 Validate the WAF attack.
    it('waf attack validation', () => {
        cy.visit('https://app.cymulate.com/global_report')
        cy.get('[id="email"]').type('candidate_user@cymulate.com')
        cy.get('[id="password"]').type('Aa123456')
        cy.get('[test-id="sign-in"]').click()
        cy.get('[class="btn-cymulate empty"]').click()
        cy.get('[class="table-row attack-item-container"]').click()
        //validate the WAF URL at the following way https://ekslabs.cymulatedev.com
        cy.get('[class="report-summary-data"]').should('contain', 'https://ekslabs.cymulatedev.com')
        //validate the assessment status that is completed
        cy.get('[class="cymulate-tag-design green"]').should('contain', 'Completed')
        //validate the overall score: 29.
        cy.get('[class="report-score-container"]').should('contain', '29')

    })

//      //6.Verify that the user is able to reset their password if they have forgotten it.
    it('reset password', () => {
        cy.contains('Forgot my password').click()
        cy.url().should('include', '/forgot')
        cy.get('[id="email"]').type('candidate_user@cymulate.com')
        cy.get('[test-id="send"]').click()
        cy.get('.login-container').should('contain', 'An email with details on how to reset your password Has been sent to candidate_user@cymulate.com')
    })

    // //7.Verify that the login page is secure and that data is encrypted.
    it('is secure and data is encrypted', () => {
        cy.url().should('include', 'https://')
        cy.request({
            url :'https://app.cymulate.com/login',
            failOnStatusCode :false
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.headers).to.have.property('content-type')
            expect(response.headers).to.have.property('strict-transport-security')
            expect(response.headers).to.have.property('x-dns-prefetch-control')
            expect(response.headers).to.have.property('x-frame-options')
            expect(response.headers).to.have.property('x-xss-protection')
        })


    })


})

