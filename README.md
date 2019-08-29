[![Netlify Status](https://api.netlify.com/api/v1/badges/a37c0ad8-deae-4bd3-8c8e-cbac8d2f05c3/deploy-status)](https://app.netlify.com/sites/gatsby-starter-dot/deploys)

# Gatsby Starter
Gatsby Starter for creating portfolio & blog.

## Key Features
These are the key features of the project:
* [Gatsby](https://www.gatsbyjs.org/) (GraphQL for queries)
* [React](https://reactjs.org/) (everything in React Hooks)
* [Redux](https://redux.js.org/) (custom HOF to connect actions & props)
* [Material UI](https://material-ui.com/) (palette, typography & breakpoints configuration)
* [Contentful CMS](https://www.contentful.com/) (blog integration)
* [Netlify Deployment Support](https://www.netlify.com)
* [React Helmet](https://github.com/nfl/react-helmet)
* [Flow](https://flow.org/)
* [Prettier](https://prettier.io/)
* Config files for each environment

## Get Started
Make sure that you have Node.js v.8, yarn v.1 and npm v.5 or above installed.

Install Gatsby CLI
```
npm install -g gatsby-cli
```
Clone repository
```
git clone https://github.com/chronisp/gatsby-starter.git <YOUR_PROJECT_NAME>
```
Move to project directory
```
cd <YOUR_PROJECT_NAME>
```
Install all dependencies
```
yarn install
```

### Development mode
Start development server
```
yarn develop
```
Your site is now running at http://localhost:8000.

### Production mode
Create a production build
```
yarn build
```
Serve the production build locally
```
yarn serve
```
Your site is running at http://localhost:9000.

### Linting
Format all JS files
```
yarn format
```

## Contentful Blog
In order to use Contentful blog, you should define the required settings in both ```.env.development``` and ```.env.production``` files.

```
CONTENTFUL_SPACE_ID=XXXXXXXXXX
CONTENTFUL_ACCESS_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXX
CONTENTFUL_ENV=XXXX
```
For more info on how to setup Contentful follow this [link](https://www.contentful.com/r/knowledgebase/gatsbyjs-and-contentful-in-five-minutes/).
