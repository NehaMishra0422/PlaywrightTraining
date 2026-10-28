/*
Different states in playwright are as follows -
visible -> 	Element is visible on the page
hidden  -> 	Element is hidden or doesn't exist
attached ->	Element exists in the DOM
detached ->	Element is not in the DOM
enabled ->	Element is enabled
disabled ->	Element is disabled
editable ->	Element can be edited
checked	->  Checkbox or radio button is selected
focused -> 	Element has keyboard focus
stable ->	Element's bounding box remains unchanged across consecutive animation frames

Visible	                                               Attached
- The element can be seen on the webpage.	      - The element exists in the DOM.
- Checks visibility.	                          - Checks DOM presence.
- An element must be attached to be visible.	  - An attached element may be visible or hidden.
- Assertion: toBeVisible()	                      - Assertion: toBeAttached()
                                                  - ex clicking drop down shows some elements

*/