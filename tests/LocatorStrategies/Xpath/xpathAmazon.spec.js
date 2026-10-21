/*

Website used : https://www.amazon.in/ref=nav_logo

1. using ID
Search box 
xpath ->  //input[@id='twotabsearchtextbox']
css ->  #twotabsearchtextbox

2. using attribute -
search box
xpath  ->   //input[@aria-label='Search Amazon.in']
css ->   input[aria-label='Search Amazon.in']

3. using text -

Website used : https://www.demoblaze.com/

xpath -> //button[text()='Sign up']
css -> [onclick='register()']

4. by parent::

Amazon : Mobiles ->
//input[@name='submit.addToCart']/parent::span

5. parent::

amazon 
highlights all three EN ,account and cart
//div[@id='icp-nav-flyout']/parent::div

6. 
*/