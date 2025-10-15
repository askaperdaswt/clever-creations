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

## Collaboration Guidelines

To maintain project stability and prevent conflicts while working as a team, please follow these important guidelines:

### 🚨 Critical Rules

#### 1. **Work Only on Your Assigned Pages**
- **DO**: Only modify files in `src/pages/` that belong to you
- **DON'T**: Edit other team members' pages or components
- If you need to reference another page, ask the owner first

#### 2. **Protect Global Styles**
- **DO NOT** modify these files without team approval:
  - `src/index.css` (global styles)
  - `src/App.css` (app-wide styles)
- **DO**: Create page-specific CSS files (e.g., `YourNamePage.css`)
- **DO**: Use CSS modules or styled-components for isolated styling

#### 3. **Branch Management**
- **Always** create a new branch for your work:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b yourname-feature-name
  ```
- **Never** work directly on the `main` branch
- Use descriptive branch names (e.g., `john-homepage-updates`)

#### 4. **Shared Components**
- **DO NOT** modify existing shared components in `src/components/`
- **DO**: Create new components specific to your page if needed
- **DO**: Discuss with the team before creating new shared components

### 📋 Development Workflow

#### Before You Start
1. Pull the latest changes from main
2. Create your feature branch
3. Ensure the app runs locally (`npm start`)

#### While Working
1. **Test Frequently**: Run `npm start` to check your changes
2. **Stay Isolated**: Only modify your assigned files
3. **Commit Often**: Make small, focused commits with clear messages
4. **Keep CSS Scoped**: Use specific selectors or CSS modules

#### Before Submitting
1. **Test Thoroughly**: Verify your page works correctly
2. **Check Other Pages**: Ensure you didn't break existing functionality
3. **Update Documentation**: Add comments for complex logic
4. **Clean Up**: Remove console.logs, unused imports, and temporary code

### 🔄 Pull Request Process

#### Creating PRs
```bash
# Before creating PR, sync with main
git checkout yourname-feature-name
git pull origin main
# Resolve any conflicts, then push
git push origin yourname-feature-name
```

#### PR Guidelines
- **Title**: Clear description of what was changed
- **Description**: List specific changes made
- **Testing**: Describe how you tested your changes
- **Screenshots**: Include before/after images for UI changes

### 🚫 What NOT to Touch

#### Files to Avoid (Unless Discussed with Team)
- `package.json` / `package-lock.json`
- `src/index.js`
- `src/App.js` (unless adding your route)
- `public/index.html`
- Any page that isn't yours in `src/pages/`
- Global CSS files

#### Dangerous Actions
- Don't run `npm install` new packages without team approval
- Don't modify webpack configuration
- Don't change React version or major dependencies
- Don't reformat entire files (only format code you're changing)

### 🆘 When Things Go Wrong

#### If You Accidentally Modify Someone Else's File
1. Immediately revert the changes: `git checkout -- filename`
2. Let the team know what happened
3. Check if the original author needs to review anything

#### If You Get Merge Conflicts
1. Don't panic!
2. Ask for help if you're unsure
3. Never force-push to resolve conflicts
4. Test thoroughly after resolving conflicts

#### If You Break Something
1. Stop and assess the damage
2. Try to revert to last working state
3. Ask for team help
4. Document what went wrong for future prevention

### 💡 Best Practices

- **Communicate**: Use comments, PR descriptions, and team chat
- **Start Small**: Make incremental changes rather than massive updates
- **Be Consistent**: Follow existing code style and naming conventions
- **Document**: Add comments explaining complex logic
- **Test Cross-Browser**: Check your changes in different browsers if possible

Remember: **When in doubt, ask the team!** It's better to ask questions than to accidentally break something.
