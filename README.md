# Stan TV ReactJS Coding Challenge

## Overview

This project sets up a React application manually, focusing on utilizing Babel and Webpack for custom configurations. Redux is omitted due to the simplicity of the application, which includes only two pages: Home and Program.

- Styling is achieved by using Styled Components. 
- React Router is used for navigation between the Home and Details views. 
- The project structure is designed to separate controller components from presentation components, facilitating easier unit testing and maintainability.
- There are no real API calls, so just use timeouts similar to the delay to allow viewing of the loading state.
- Redux is not included as it's not needed for this project's complexity. Additionally, Micro-Frontends (MFE) are considered more popular currently.
- Unit tests have been added to cover all the components and views.
   

## Installation

Follow these steps to set up the project locally (Note: Node version should be 18 or above):

1. Clone the repository:

   ```
   git clone [repository-url]
   ```

2. Navigate to the project directory:

   ```
   cd [project-name]
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

   This command runs the app in development mode and opens it in your default browser at `localhost:3000`.


5. Run the unit tests:

   ```
   npm test
   ```
   Unit test coverage will be displayed in the console.


## Usage

- **Local Development**: Start the development server using `npm start`. This will allow you to view and interact with the app in your browser at `localhost:3000`.

- **Testing**: Run `npm test` to execute the tests and report coverage. This helps ensure that your application functions as expected.

- **Building for Production**: Use `npm run build` to compile the app into static files located in the `dist` folder. This version is optimized for performance and ready to be deployed.

## Improvements

- The `npm test` command coverage is currently minimal and can be improved.
- The navigation arrows (left and right) may go out of range when reaching the end of the array, causing the user to lose focus when interacting with them. This can be improved.