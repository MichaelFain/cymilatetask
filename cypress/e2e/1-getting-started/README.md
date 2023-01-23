Test cases for the login flow testing (manual)

1 Verify that the login page loads correctly and all elements are displayed properly.

2 Verify that the user can enter their email and password and click the login button.


3 Verify that the user is prompted for their email and password if they try to login without entering any information.

4 Verify that the user is notified if their login credentials are incorrect.

5 Verify that the user is directed to the correct page after successful login.

6.Verify that the user is able to reset their password if they have forgotten it.

7.Verify that the user is able to sign up for a new account if they do not have one.

9.Verify that the login page is secure and that data is encrypted.

10.Verify that the login page is accessible to users with disabilities.

11.Verify that the login page is responsive and works well on different devices and screen sizes.

12.Verify that the login page is protected against common attacks such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).

13.Verify that login attempts are rate-limited to prevent brute force attacks.

14.Verify that the password policy is enforced such as minimum length, complexity, and expiration.

15.Verify that the user session is terminated after a certain period of inactivity.

16.Verify that the user session is terminated upon logout or when the browser is closed.

17.Verify that the user's IP address is checked and that login is blocked if it is coming from a blacklisted IP address

18.Verify that login attempts from different countries are flagged and reported as suspicious.

19.Verify that a lockout policy is implemented for repeated failed login attempts.

20.Verify that Two-factor authentication is implemented and works as expected.

21.Verify that the login page is compliant with relevant security standards and regulations.

Cypress installation:
https://docs.cypress.io/guides/getting-started/installing-cypress
run a Cypress project:

-Open a terminal or command prompt on your local machine.

-Navigate to the root directory of your Cypress project.

-Install the dependencies for the project by running the command npm install or yarn install, depending on which package manager you are using.

-Run Cypress by running the command npx cypress open (or ./node_modules/.bin/cypress open if you installed Cypress locally)

-Cypress GUI will open and you will be able to see all the test files, you can run any test file by clicking on it.
(comandline to run the test - 'npx cypress run' )
-You can also run Cypress in headless mode, by running the command npx cypress run (or ./node_modules/.bin/cypress run if you installed Cypress locally)

-Cypress will run all the test files, it will also generate a HTML report, you can find it under the cypress/videos and cypress/mochawesome-report folder.


!! It's important to note that Cypress requires Node.js to be installed on your machine, if you don't have Node.js installed, you can download it from the official website https://nodejs.org/

