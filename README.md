# Technical Assessment - Frontend Engineer Position

## How to use

1. Clone the repository.
2. Open console and start the server with `npm run server`
3. Open a new console and navigate to the frontend directory `cd frontend`
4. Install frontend dependencies with `npm install`
5. Run the frontend development server with `npm run dev`
6. Open a tab in `http://localhost:5173/`

## Steps

1. Connect your account introducing a valid email.
2. Get verified with the code received in the terminal.
3. Choose a currency and plan for subscription.
4. Congrats! You're a new subscriber.

## Technologies used

- Vite
- React
- Css
- Javascript

## Technical Explanation

The code is split into two main folders: backend and frontend. The server.js file hasn’t been changed at all it’s still exactly the same as the one that came with the test.

For the React project, I used Vite because it needs less setup than create-react-app, and code changes show up way faster.

All the styles are just plain CSS, no frameworks involved.

All the images and icons used in the project are in the /assets folder, and I import them into components using ES Modules syntax (like import logo from '@/assets/logo.svg').

React components are organized using a “one folder per component” structure to keep things tidy. The smaller, reusable components are inside the /common folder. Only the main MultiStepForm component sits on its own.

All the server requests are in the /logic folder. I use try...catch with async/await to catch any errors during requests and to keep the code nice and readable.

I have created a context to pass data needed through all the different screens and the function to move between them.
