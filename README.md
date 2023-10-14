# File Based Routing in Next.js

This repository demonstrates the concept of file-based routing in a Next.js application. Below is a brief explanation of the routing structure:

## HOME

The default route for the application is set to `pages/index.js`. When you visit http://localhost:3000, you'll see the contents of this file.

## ABOUT

To create an 'about' page, you should follow these steps:

1. Create a folder called 'about' inside the 'pages' folder.
2. Add an `index.js` file inside the 'about' folder.
   The about page will be accessible at http://localhost:3000/about.

## PORTFOLIO

The URL path for the portfolio page is set to `pages/portfolio/list.js`. You can access it using http://localhost:3000/portfolio/list.

## SINGLE PORTFOLIO ITEM

The dynamic segment is used in the 'portfolio' section. The file `pages/portfolio/[portfolioId].js` contains the dynamic segment '[portfolioId]'. The value for this segment will be stored in the query object, accessible through the useRouter hook imported from `next/router`.

## CLIENTS

The path `pages/clients/[id]/[clientId].js` defines a dynamic route with two dynamic segments: 'id' and 'clientId'. This page will match paths like `/clients/a/b` (with id=a and clientId=b).

## BLOGS

The file `pages/blogs/[...slug].js` is used for routes starting with '/blogs/' that have more than one segment after it.

Feel free to explore the code and the routing structure to understand the Next.js file-based routing mechanism better.
