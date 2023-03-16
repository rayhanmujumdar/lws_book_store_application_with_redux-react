# Book Application with Rtk query

### Date: 16/03/23

Agenda: 

- Functional Requirement analysis
- create a software requirement specification (**SRS**)
- choose technology
- setup project

# Functional requirement:

- When the page is loaded, the list of books will be fetched from the server
- If you submit the book information on the 'Add Book page', it will be saved on the server. Must be done using Mutation query of RTK Query and when added it will come from 'Add' page to Home page.
- There are two tags named 'All', 'Featured' on the right of 'Book List', if you select 'Featured' only the featured books will be filtered. 'All' will show all. This has to be done on the client side itself.
- There is a 'Search Bar' in the navigation menu, if you search there, it will search only by the name of the book and the search result will be filtered in the 'Book List' section. If the search bar is empty, all books will appear as they normally would.
- Clicking on the 'Edit' icon of the card item will take you to an edit page. For this you have to use React Router and when you go to the edit page, the form will be pre-filled with the information of that book. Now if you update any data in this form it will also be updated on the server and when updated it will move from edit page to home page.
- Finally, if you click on the delete button, the book will also be deleted from the server

# Requirement Analysis:

### rtk query setup - (reducer)

**ApiSlice:**

- getBooks - query
- getBook - query
- addBook - mutation
- editBook - mutation
- deleteBook - mutation

************FilterSlice:************

- filterList - update filter list - All/Featured
- filterSearch - input value set

# Choose Technology:

- React
- React-router-dom
- Rtk query
- redux-toolkit

# Deploys:

**Github Link:** https://github.com/Learn-with-Sumit/batch-2---assignment-8---bookstore-with-rtk-query-rayhanmujumdar

**Live site Link:** [https://storied-strudel-f39a19.netlify.app/](https://storied-strudel-f39a19.netlify.app/)