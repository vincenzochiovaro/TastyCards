# TastyCards 1.0

TastyCards 1.0 is a minimalist recipe generator platform that provides users the opportunity to explore and uncover random recipes. This project also serves as an extensive testing platform, thoughtfully crafted to bring to life and verify the functionalities of my Mealtime backend project. TastyCards 1.0 stands as a live testament to the hands-on application of the fundamental features integrated into Mealtime. https://github.com/vincenzochiovaro/Mealtime

## Hosted Version

TastyCards is hosted on an AWS S3 bucket, providing easy access to the platform.

- Hosted on AWS S3: https://d17bcgiggm8x98.cloudfront.net.

## Features

- Generate random recipes with a single click
- View recipe details for each generated recipe
- Browse recipes by category
- Enjoy a simple and responsive user interface

## Technologies Used

- TypeScript: Typed superset of JavaScript for enhanced development experience and better code maintainability
- React: JavaScript library for building user interfaces
- React Router: Library for declarative routing in React applications
- React Bootstrap: UI library for responsive and modern components
- CSS: Styling and layout
- API Calls: Fetch data from a backend API to retrieve recipe information

## Getting Started

To get started with TastyCards, follow these steps:

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`

## Testing

TastyCards includes a basic set of unit tests to ensure core functionality. These tests cover essential components, functions, and user interactions. The following testing frameworks and libraries are used for testing:

- Jest: JavaScript testing framework
- React Testing Library: Testing utilities for testing React components

To run the tests, follow these steps:

1. Ensure that all dependencies are installed: `npm install`
2. Run the tests: `npm test`
3. The test runner will execute the basic test suite, providing feedback on the overall test results.

## Folder Structure

The project structure is organized as follows:

- `public`: Contains the public assets and the HTML template file
- `__tests__`: Contains the basic test files for unit testing the application
- `src`: Contains the source code of the React application
  - `components`: Contains essential UI components
  - `apiCalls`: Contains minimal functions for making API calls to retrieve recipe data
  - `styles`: Contains basic CSS stylesheets for minimal styling of the components
  - `App.tsx`: The main component that sets up the routes and renders the components
  - `index.tsx`: The entry point of the application

## Contributing

Contributions to TastyCards are welcome! As this is the Minimum Viable Product, focus on essential bug fixes, improving core functionality, and enhancing user experience. Feel free to open an issue or submit a pull request for any improvements you'd like to contribute.
