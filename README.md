
This README outlines how to set up and run the automated test scripts using Playwright.
Estimated Time Spent:
•	Script Development: 4 hours
•	Test Data Preparation: 1 hour
Challenges Faced:
•	Identifying and separating reusable actions into Page Object Model (POM) classes.
•	Handling potential race conditions or timing issues during test execution.
Prerequisites:
•	Node.js and npm installed on your system (https://nodejs.org/en)
•	Basic understanding of Playwright testing framework (https://playwright.dev/)
Installation:
1.	Clone this repository.
2.	Open a terminal in the project directory and run npm install to install the required dependencies.
Test Data:
The test scripts rely on data stored in the fixtures/testData.json file. Ensure you have created this file and populated it with the necessary test data (e.g., email addresses, passwords, search queries).
Running the Tests:
1.	Open a terminal in the project directory.
2.	Run the following command to execute all test suites:
npx playwright test

This command will discover all test files (*.spec.js) and execute them sequentially.
Reporting:
Playwright generates a test report in the test-results directory upon completion. This report provides details on passed, failed, and skipped tests.
Configuration:
Currently, the test scripts do not require any specific configuration beyond the provided test data. However, you can leverage Playwright's configuration options for more advanced setups (refer to Playwright documentation for details).
Additional Notes:
•	The test scripts utilize Page Object Model (POM) for better code organization and maintainability.
•	Each test suite (describe block) defines a set of related tests.
•	Individual tests (test blocks) verify specific functionalities within the application.

