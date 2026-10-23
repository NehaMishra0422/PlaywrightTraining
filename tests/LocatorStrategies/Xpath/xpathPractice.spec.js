/*

website used : https://demowebshop.tricentis.com/

1. to get the logo Demo Web Shop

a) using single attribute
xpath - //img[@alt='Tricentis Demo Web Shop']

if we don't know the tag name 
//*[@alt='Tricentis Demo Web Shop']
* represents regular expression

b) using double attributes

search box
//input[@value='Search store'][@type='text']

c) with AND operator -> both should match

search button
//input[@type='submit' and @value='Search']

////input[@type='submit' and @value='Find'] -> 0 matching element

d) with OR operator -> any one should match

//input[@type='submit' or @value='Find']

e) contains() method

select the products with name containing 'computer'
//h2/a[contains(@href,'computer')]

f)starts-with()

Digital Download element

//a[starts-with(@href,'/digital')]

g) text() -> selects eleemnt based on the exact text content of the element

search for shopping cart text

//span[text()='Shopping cart']

we can also write text() using dot(.) this also represents text
//span[.='Shopping cart']

h) last()

My Account at the bottom of the page 
//div[@class='column my-account']//li[5]
//here we can give index also 

by using last()
//div[@class='column my-account']//li[last()]

selects the last elemnt of My Account ie 'wishlist'

xpath Axes -

i) parent::
Information > About us

//a[@href='/about-us']/parent::li

j) child:: find direct child

customer service > blog
//div[@class='column customer-service']/child::ul//li[3]

k) ancestor::

jewelry [ category]
//a[@href='/jewelry']//ancestor::ul[4]

l) following::

//a[@href='/jewelry']//following::li

m) following-sibling::

 //a[@href='/jewelry']//following-sibling::div

n) preceding::
finds that elemt whatever elemnts comes will comes under picture 

//a[@href='/jewelry']//preceding::div

o) descendant::
will select all of the nodes along the child:: axis, as well as their children, and their children's children, etc..



*/