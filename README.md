      ExpressBasics
Welcome to ExpressBasics! This project is designed to help you learn how to create servers using Express.js.

=>  Features
 
       Routes: Created routes for profile, home, contact, and error.

       Middleware: Implemented a middleware function to run before all routes.


app.use(function(req, res, next) {
  // Middleware tasks here
  next();
});


Middleware allows tasks like authentication or data manipulation before reaching route handlers.

=>   Dynamic Routing: Demonstrated dynamic routing using route parameters for paths like /profile/:repeatingUrl.

 => Template Engines (EJS): Utilized EJS (Embedded JavaScript) for dynamic content generation within HTML templates.

Install EJS: npm i ejs
   Configure EJS:

app.set("view engine", "ejs");

Static Files: Served static files such as images, stylesheets, and JavaScript.

     These files are managed and served directly by the Express server.
     Setup and Run
     Follow these steps to set up and run the project:

=> Install Dependencies: Run npm install to install dependencies including EJS.
Configure EJS: Set the view engine to EJS in your main application file:
javascript
Copy code
app.set("view engine", "ejs");

=>Run the Project: Start the project using npx nodemon ./file.js, replacing file.js with your main application file name.
