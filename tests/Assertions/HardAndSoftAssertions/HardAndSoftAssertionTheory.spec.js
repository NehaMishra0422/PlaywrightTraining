/*

Assertions verify whether the actual result matches the expected result. In Playwright, the key difference between hard and soft assertions is what happens when an assertion fails.

Hard Asserions :
A hard assertion uses the normal expect() syntax.
If the assertion fails, the test stops at that point. The remaining statements in that test are not executed.

Soft Assertions :
A soft assertion uses expect.soft().
If the assertion fails, the test continues executing. Playwright records the failure and marks the test as failed at the end.


Difference between hard and soft assertions
Hard assertion	                                      Soft assertion
- Uses expect()	                                    - Uses expect.soft()
- Stops at the failed assertion	                    - Continues after the failed assertion
- Failure is reported	                            - Failure is recorded and reported
- Useful when the next step depends on the          - Useful for checking multiple independent elements
  current check	


*/