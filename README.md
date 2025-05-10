# Assignment 1 Web Technologies 1707
### index.html - Home Page

This page contains 2 videos, and a short text paragraph describing the store. All other pages with the homepage or index.html share the css file, and most html code is inherited from this file.

#### index.html - CSS
Since all pages share the same css file, they all share the same nav bar and footer style, which was designed with the home page in mind. Using Flexboxes, we also put text beside the video.

This page contains no js, as it was not required.

### products.html - The Products

This page is made from a js for loop that goes through a list of 3 lists, each containing another series of list which contains descriptions of the products. 

#### products.html - CSS
With CSS, each product description and picture is shown in a card format with responsive design, reducing the column numbers depending on the screen width.

#### products.html - JS
The whole page depends on JS, with 3 main functions. One starts with the page load, showing all the products, one is called when the the card is clicked on, which opens items.html with the necessary information being passed through with Session Storage, and the last one adds products to the cart with Local Storage, when the add to cart button is pressed.

### cart.html - The Cart
This page, like before, is created with primarily js, since we need to get data from the Local Storage.

#### cart.html - CSS
Very little changes brought to the css compared to the previous pages.

#### cart.html - JS
Two functions, one that creates the html of the cart based on local storage, and another to clear the cart **AND** Local Storage.

### item.html - Items Page
The items page takes the name of the product from the Session Storage. Very little CSS, and we added a similar js function from product to add it to cart.