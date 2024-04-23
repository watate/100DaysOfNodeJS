# Challenge #9: Static Files with Express

## Background:
In many web applications, delivering static files such as images, CSS, and JavaScript is essential for creating a rich user experience. Express, a web application framework for Node.js, provides a built-in middleware function to serve these types of files efficiently.

## Challenge Description:
Your task is to create a simple Express server that serves static files from a directory. This challenge will help you understand how to configure an Express app to deliver content without the need for any routes specifically handling file requests.

## Requirements:
1. Set up an Express server in a file named `server.js`.
2. Configure the server to serve static files from a directory named `public`.
3. Inside the `public` directory, place at least one HTML file, one CSS file, and one image.
4. Ensure that visiting the root URL (e.g., `http://localhost:3000/`) automatically serves an `index.html` file that includes the CSS and displays the image.
5. Include middleware to log each request to the console before the files are served.

## Bonus:
- Add error handling middleware that sends a custom message for any requests to resources that do not exist.
- Implement cache-control headers to optimize the loading times of your static assets.

## What to Submit:
- A ZIP file containing all files necessary to run your project, or a link to a GitHub repository containing your project code.
- Ensure your submission includes the `public` directory with your static files, `server.js`, and any other dependencies documented in a `README.md` file.

## Evaluation Criteria:
- Correct setup of the Express server to serve static files.
- Functionality of middleware for logging and error handling.
- Quality and organization of code.

## Resources:
- [Express Static Files Documentation](https://expressjs.com/en/starter/static-files.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
