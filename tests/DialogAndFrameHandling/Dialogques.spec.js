/*

1. What are browser dialogs in Playwright? What are the different types?
Browser dialogs are JavaScript popup messages displayed by a webpage to interact with users.

Playwright supports three main types of JavaScript dialogs:
1. Alert: Displays an information message with an OK button.
2. Confirm: Displays a confirmation message with OK and Cancel buttons.
3. Prompt: Displays a message with an input field where users can enter text.

2. How do you handle JavaScript alert, confirm, and prompt dialogs?
We use the page.on('dialog') event to handle JavaScript dialogs.

Playwright provides two important methods:
- dialog.accept() – Accepts the dialog.
- dialog.dismiss() – Dismisses the dialog.

3. How do you handle JavaScript alert, confirm, and prompt dialogs?
We use the page.on('dialog') event to handle JavaScript dialogs.

Playwright provides two important methods:
- dialog.accept() – Accepts the dialog.
- dialog.dismiss() – Dismisses the dialog.

4. What is the purpose of page.on()?
page.on() is used to listen for browser page events.

It allows us to perform actions when a particular event occurs.

Common events include:
- dialog – JavaScript alert, confirm, or prompt.
- console – Browser console messages.
- pageerror – Unhandled JavaScript errors on the page.
- request – When a network request is sent.
- response – When a network response is received.
- download – When a download starts.

5. What is the difference between page.on() and page.once()?
Both methods register event listeners, but their execution frequency is different.
page.on()	                                            page.once()
Executes every time the event occurs.	                Executes only the first time the event occurs.
Listener remains active until removed or page closes.	Listener is automatically removed after the first event.
Used for continuous event monitoring.	                Used when we need to capture an event only once.

6. How would you capture console messages and page errors using event handlers?
use page.on('console') to capture browser console messages 
page.on('pageerror') to capture unhandled JavaScript errors. 
This helps identify frontend issues during automation.

ex
test('Capture console and page errors', async ({ page }) => {

    // Capture console messages
    page.on('console', message => {

        console.log(
            'Console Type:', message.type(),
            'Message:', message.text()
        );

    });

    // Capture JavaScript errors
    page.on('pageerror', error => {

        console.log('Page Error:', error.message);

    });

    await page.goto('https://example.com');

});
message.type() returns the console message type, such as:
- log
- warning
- error
- info
message.text() returns the console message.

error.message returns the JavaScript error message.

7. How would you handle a confirmation dialog and accept or dismiss it based on a condition?
We can use an if-else condition inside the dialog event handler.

ex-
test('Accept or Dismiss using if-else condition',async({page})=>{
    await page.goto('https://example.com');
    const shouldAccept = true;
    page.on('dialog',dialog()=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert!');
        if(shouldAccept){
        expect(dialog.accept());
        }
        else{
            expect(dialog.dismiss());
        }})
    
    )})

8. Why should dialog event handlers generally be registered before the action that triggers the dialog?
Because the dialog may open immediately after clicking a button.
If we register the event handler after clicking, we might miss the dialog event.    




























































*/