/*
hooks behave differently depending on whether tests run sequentially or in parallel.

By default, Playwright runs tests in a file sequentially (unless configured otherwise).

When parallel execution is enabled, multiple tests can run simultaneously using different workers.

Behaviour of hooks in parallel execution

Hook	                    Behaviour in parallel
beforeAll()	                Executes once per worker, not once globally
afterAll()	                Executes once per worker after its tests finish
beforeEach()	            Executes before every test
afterEach()	                Executes after every test

Important: beforeAll() and afterAll() are executed separately in each 

for example there are 5 tests and 3 workers
beforeAll() - runs 3 times for each worker
afterall() - runs 3 times for each worker after test finishes
beforeEach() - runs 5 times for each test
afterEach() - runs 5 times for after every test 

*/