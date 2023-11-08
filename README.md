# Sports-Associtation-Website

Clone the repository into your projects directory:

### `git@github.com:lnikol00/Sports-Association-Website.git`

# Project Description

Overview:

Full stack Sports Associtaion Website made as part of Graduation thesis. 
Features:

Client-Side:

* Menu Display: Present the news associated with the organziation, as well as gallery and info page.
* Ordering System: Allow customers to browse the fan-shop, add items to their cart, and place orders.
* User Registration and Authentication: Enable users to register, log in, and track order history.
* Real-Time Order Tracking: Provide real-time updates on the status of customers' orders.
* Payment Integration: Support secure payment options for online orders.

Admin Panel:

* Menu Management: Easily add, update, or remove menu items and categories.
* Order Management: View and manage incoming orders, update order statuses, and track order history.
* User Management: Admins can manage customer accounts, track their order history, and handle support requests.
* Analytics and Reporting: Provide insights into sales data, customer behavior, and order trends.
* Inventory Management: Monitor and update ingredient stock levels for menu items.
* Security and Role-Based Access: Implement role-based access control to protect sensitive admin functionalities.

Backend:

* RESTful API: Develop a RESTful API using Node.js to enable communication between the frontend and the database.
* Database Integration: Utilize MongoDB to store and manage menu items, orders, customer data, and more.
* Authentication and Authorization: Implement secure authentication mechanisms for customers and admin users.

<h1 align="left">Languages and Tools:</h1>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> </p>

# Backend - server

### `npm install` or `npm i`

The command is used in Node.js and JavaScript development to install the dependencies listed in a project's package.json file.

In the project directory, you can run:

### `npm run dev`

The command npm run dev is typically used in a Node.js-based project to start a development server or perform other development-related tasks. Here's what this command does:

* npm: This is the Node Package Manager, which is used to manage and install packages and dependencies for Node.js projects.
* run: This is a subcommand of npm that is used to execute a script defined in your project's package.json file.
* dev: This is the name of the script you want to run. The name "dev" is a common convention, but you can name your scripts as you see fit.

Adding .env file: 

* MONGO_URL - connection to MongoDB cluster.
* JWT_SECRET - random set of strings or numbers.
* PORT - set to 5000 ( in this case ) or you can choose any other localhost
* NODE_ENV - set to development

# Frontend - client 

### `npm install` or `npm i`

The command is used in Node.js and JavaScript development to install the dependencies listed in a project's package.json file.

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
If port is already taken it will automaticly set the app to run on the next available port (probably 3001).

The page will reload if you make edits.
You will also see any lint errors in the console.

**Client page** is built using CSS Module.

# Frontend - client 

### `npm install` or `npm i`

The command is used in Node.js and JavaScript development to install the dependencies listed in a project's package.json file.

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser. 
If port is already taken it will automaticly set the app to run on the next available port (probably 3001).

The page will reload if you make edits.
You will also see any lint errors in the console.

**Admin Panel** is built using styled-components.

