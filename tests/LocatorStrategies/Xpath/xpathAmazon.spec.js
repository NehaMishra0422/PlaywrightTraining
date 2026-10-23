/*

Website used : https://www.amazon.in/ref=nav_logo

1. using ID
Search box 
xpath ->  //input[@id='twotabsearchtextbox']
css ->  #twotabsearchtextbox

amazon logo
xpath -> //a[@id='nav-logo-sprites']

2. using attribute -
search box
xpath  ->   //input[@aria-label='Search Amazon.in']
css ->   input[aria-label='Search Amazon.in']

amazon logo 
xpath -> //a[@aria-label='Amazon.in']

3. using text -

Website used : https://www.demoblaze.com/

xpath -> //button[text()='Sign up']
css -> [onclick='register()']

contains()

select products with name 'Apple
//a[contains(@href,'Apple')]
4. using AND Operator

search box 
//input[@id='twotabsearchtextbox' and @name='field-keywords']

5. using OR operator

search box
//input[@id='twotabsearchtextbox' or @name='field']

6. starts-with() -> matches the element whose attribure value starts with a specfied string

Grocery & gourment food element
//a[starts-with(@href,'/Gourmet')]

7. text() -> selects eleemnt based on the exact text content of the elements. 
             It will not neglect spaces if added while searching and element doesn't contains any space.
             Exact text should be written

Computers & Accessories text

//span[text()='Computers & Accessories']
or
//span[.='Computers & Accessories']

8. normalize-space() -> selects elements based on the exact text content of the elements
                        with neglecting the spaces added dug=ring searching.

   removes leading and trailing whitespace and replaces consecutive whitespace characters with a single space.                     

9. last() -> selects the last element from the set of matching nodes

10 : parent::

Electronics

//a[starts-with(@href,'/electronics')]//parent::div


Amazon : Mobiles ->
//input[@name='submit.addToCart']/parent::span

amazon 
highlights all three EN ,account and cart
//div[@id='icp-nav-flyout']/parent::div

11. child::

dropdown near search box-> elemnt for Amazon Devices
//select[@name='url']//child::option[4]

12. ancestor::

dropdown near search box-> elemnt for Amazon Devices
//select[@name='url']//ancestor::div[1]

13. following - ypu will get the siblings alongwith the children of the siblings

//select[@name='url']//following::label

12. following-siblings::
 only you will get siblings

//select[@name='url']//following-sibling::option

13. preceding::

//select[@name='url']//preceding::option

14. preceding-sibling::

//select[@name='url']//preceding-sibling::option

15. descendant:: 
will select all of the nodes along the child:: axis, as well as their children, and their children's children, etc..


//select[@name='url']//descendant::option


*/