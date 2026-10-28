/*

Dialogs : Handle browser dialogs (alert, confirm, prompt, beforeunload) that block page interaction.

In Playwright, JavaScript dialogs are browser pop-ups that interrupt normal page interaction. 
Playwright handles them using the page.on('dialog') or page.once('dialog') event listeners.

Playwright will automatically dismiss the dialogs, so we don't need to seperatly handle these dialogs.
But still if we want to do some validations in dialogs then for that what we can do is to register a dialog handler before performing the action.
This is called Dialog Handler. Through this we can accept-> OK or Dismiss -> cancel the dialog

To create Dialog Handler -

page.on('dialog', dialog => dialog.accept());
await page.getByRole('button').click();

if I want to check what type of dialog it is ,

page.on('dialog',async dialog()=>{
    expect(dialog.type()).toContain('alert') //this is alert type validation

    //if you want to check for the  message
    expect(dialog.message()).toContain('I Am message validation')

    //closes the dialog
    await dialog.accept();
    })
    
 these should be written before the action is trigered



*/