/*
explicit waits are used when you want to wait for a specific condition or event before continuing the test. 
They help you handle elements that appear, disappear, or change dynamically.

Types of waits -

Wait type	                                      Purpose
locator.waitFor()	                         Wait for an element to reach a particular state
expect()	                                 Wait until an assertion becomes true
page.waitForURL()	                         Wait for navigation to a specific URL
page.waitForLoadState()	                     Wait for a page load state
page.waitForResponse()	                     Wait for a specific network response
page.waitForEvent()	                         Wait for an event, such as a popup
page.waitForTimeout()	                     Wait for a fixed amount of time

 static wait which we generally avoid
.waitForTimeout(5000)

the drawback of using this wait is that, if any action completed before 5000s ,then still it has to wait for 5000s
Because of this test will take longer time to complete.
*/