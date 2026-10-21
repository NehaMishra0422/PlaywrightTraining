/*
some built in properies are

1. getByRole() -> Locates an element by its accessible role and optionally its accessible name.
                 Best for buttons, links, checkboxes, headings and other semantic elements

2. getByText() -> Locates an element by the text it displays.
                  Useful when you want to find text visible on the page.

3. getByLabel() -> Locates form controls using their associated label.
                   Useful for labelled input fields, radio buttons and checkboxes.
                  
4. getByPlaceholder() -> Locates input fields using their placeholder text.   
                         Useful when the input has placeholder text such as “Enter username”
                         
5. getByAltText() -> Locates images or image-like elements using their alternative text (alt attribute).
                     Useful for accessible images.
                     
6. getByTitle() -> Locates an element using its title attribute.
                   Useful for icons or buttons with a tooltip/title attribute.
                   
7. getByTestID() -> Locates an element using a dedicated test ID attribute. 
                    This is useful when an element does not have reliable visible text or an accessible role/name.                   

*/                    