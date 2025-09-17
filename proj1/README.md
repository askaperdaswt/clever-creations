# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# proj1
# proj1
# proj1
# Contributing Guidelines for Our Project

Welcome to the project! To keep the site stable and ensure smooth merges, please follow these guidelines when working on your features.

---

## 1. Work on Separate Branches

- Always create a **new branch** from `main` before starting your work:

  ```bash
  git checkout main
  git pull origin main
  git checkout -b yourname-feature
Avoid working directly on the main branch.

2. Add New Pages Without Impacting Existing Ones
When adding a new page, create a new file in the appropriate folder (e.g., pages/ or src/pages/).

Do not modify existing pages unless necessary.

Ensure your page/component is self-contained and does not alter shared layout files or global styles that affect other pages.

3. Test Your Changes Locally
Run the site locally (instructions here if needed) to make sure your page works.

Verify that existing pages still function correctly.

4. Keep Commits Focused and Clear
Commit only related changes in a branch.

Write clear commit messages explaining the purpose of your changes.

5. Pull the Latest main Regularly
Before merging or opening a pull request (PR), pull the latest changes from main and resolve any conflicts:

bash
Copy code
git checkout yourname-feature
git pull origin main
This keeps your branch up to date.

6. Submit Pull Requests (PRs) for Review
Open a PR to merge your feature branch into main.

Include a description of what you changed.

Avoid large, unrelated changes in a single PR.

7. Avoid Changing Shared Files Unless Necessary
If you must modify global styles, layout, or config files, coordinate with the team first.

Small, isolated changes reduce conflicts and bugs.

