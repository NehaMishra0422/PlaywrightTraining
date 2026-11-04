/*

Test hooks are used to execute some common code before or after test cases. They help avoid writing the same code repeatedly in multiple tests.

1. Types of Playwright hooks
Playwright provides four main test hooks:
Hook	                     When does it execute?
beforeAll()	                 Once before all tests in a scope
afterAll()	                 Once after all tests in a scope
beforeEach()	             Before every test
afterEach()	                 After every test

2. beforeEach()
Executes before every test case.

*/