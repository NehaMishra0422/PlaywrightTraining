/*
XPath - stands for XML path language.
It is a locator strategy used to find elements on a webpage using their HTML structure, attributes, text, and relationships with other elements.
It is used when an element doesn't have a unique ID, a stable CSS selector, or an easily accessible label.

1. Basic XML Syntax :
Example : 
<input id="username" name="user" type="text">
<button id="loginBtn">Login</button>

a) using ID
//input[@id='username']
//menas find an element anywhere in the page whose id is username

b) using attribute
//input[@name='user']
//means find an element in the page whose attribute is name='user'

c) using text
//button[text()='Login']

// — searches anywhere in the document.
input — the HTML tag name.
@id — refers to the id attribute.
= — matches an exact attribute value.
'username' — the value to match.


2. using different attributes
example : 
<input id="email" name="email" type="text" placeholder="Enter Email">

//input[@id='email']
//input[@name='email']
//input[@type='text']
//input[@placeholder='Enter Email']

3. Xpath using text
example :
<button>Login</button>
<a href="/cart">Your Cart</a>
<h2>Product Details</h2>

//input[text()='Login'] -> Exact text
//a[contains(text())='Cart'] -> Text contained in an element
//h2[contains(text())='Details'] -> Text with different element

text() -> Matches a button whose direct text node is exactly Login.
contains() -> Matches a button whose combined text contains Login, including text in descendant elements.

best to use - getByRole() , getByText()

4. Xpath using contains()
example - 
<input id="user-name-field">
<input id="user-email-field">

//input[contains(@id,'user')] -> matches both elements

//input[contains(@id,'name')] -> matches only the name element

5. Xpath using starts-with()
example :
<input id="user-123">
<input id="user-456">

//input[starts-with(@id,'user-')] -> matches both elements

6. Xpath using and , or
example :
<input type="text" name="username">
<input type="password" name="password">

//input[text()='type]' and @name='username'] -> both condition must be true

//input[@name='username' or @name='password'] -> any one must be true

7. XPath axes — navigating between related elements
Axes let you locate an element based on its relationship with another element. 
These are particularly useful in complex enterprise applications and tables.

example :
<div>
  <label>Email</label>
  <input id="email">
</div>

a) following-sibling:: (Finds a sibling element that comes after the current element)

//label[text()='Email']/following-sibling::input

Website used : https://www.demoblaze.com/
signup page - username
//label[text()='Username:']/following-sibling::input

b) preceding-sibling:: (Finds a sibling that comes before the current element)

//input[@id='email']/preceding-sibling::label

Website used : https://www.demoblaze.com/
signup page - password
//input[@id='sign-password']/preceding-sibling::label - selects password label

c) parent:: (finds the direct parent)

//input[@id='email']/parent::div


Website used : https://www.demoblaze.com/
signup page - password
//input[@id='sign-password']/parent::div

d) ancestor:: (Finds ancestor elements at any level)

//input[@id='email']/ancestor::form

Website used : https://www.demoblaze.com/
signup page
//input[@id='sign-password']/ancestor::form

e) descendant:: (Finds elements nested at any depth)

//form/descendant::input

8. Xpath using index

example - 
<button>Save</button>
<button>Cancel</button>
<button>Delete</button>

(//button)[1] - finds first button ie Save
(//button)[2] - finds second button ie Cancel
(//button)[3] - finds third button ie Delete


Website used : https://www.demoblaze.com/
signup page

(//button)[2]

*/