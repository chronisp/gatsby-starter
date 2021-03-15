<p align="center">
  <img alt="Gatsby" src="https://raw.githubusercontent.com/chronisp/gatsby-starter/master/src/images/website-icon.png" width="60" />
</p>
<h1 align="center">
  Gatsby Starter
</h1>

<p align="center">
  Gatsby Starter for creating portfolio & blog.
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/gatsby-starter-dot/deploys">
    <img alt="Netlify" src="https://img.shields.io/netlify/a37c0ad8-deae-4bd3-8c8e-cbac8d2f05c3">
  </a>
  <a href="https://www.codacy.com/app/chronisp/gatsby-starter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=chronisp/gatsby-starter&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/c23975ea23e3459283f6c76ad338fcb1">
  </a>
  <a href="https://github.com/chronisp/gatsby-starter/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/chronisp/gatsby-starter"></a>
</p>

## Key Features
These are the key features of the project:
*  [Gatsby](https://www.gatsbyjs.org/) (GraphQL for queries)
*  [React](https://reactjs.org/) (everything in React Hooks)
*  [TypeScript](https://www.typescriptlang.org/) (in progress...)
*  [Redux](https://redux.js.org/) (custom HOF to connect actions & props)
*  [Material UI](https://material-ui.com/) (palette, typography & breakpoints configuration)
*  [Contentful CMS](https://www.contentful.com/) (blog integration)
*  [Netlify Deployment Support](https://www.netlify.com)
*  [React Helmet](https://github.com/nfl/react-helmet)
*  [Prettier](https://prettier.io/)
*  [Gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)
*  Config files for each environment

## Get Started
Make sure that you have Node.js (>=12.13.0) and yarn v.1 or above installed.

Install Gatsby CLI
```sh
npm install -g gatsby-cli
```
Clone repository
```sh
git clone https://github.com/chronisp/gatsby-starter.git <YOUR_PROJECT_NAME>
```
Move to project directory
```sh
cd <YOUR_PROJECT_NAME>
```
Install all dependencies
```sh
yarn install
```

### Contentful blog
Setup Contentful settings
```sh
yarn setup
```
Follow the instructions in order to setup ```CONTENTFUL_SPACE_ID``` and ```CONTENTFUL_ACCESS_TOKEN```. Required settings will be defined in both ```.env.development``` and ```.env.production``` files.

For more info on how to setup Contentful follow this [link](https://www.contentful.com/r/knowledgebase/gatsbyjs-and-contentful-in-five-minutes/).

### Development mode
Start development server
```sh
yarn develop
```
Your site is now running at ```http://localhost:8000```.

### Production mode
Create a production build
```sh
yarn build
```
Serve the production build locally
```sh
yarn serve
```
Your site is running at ```http://localhost:9000```.

### Linting
Format all JS files
```sh
yarn format
```

For any building or deployment issues, ensure you have setup your environment according to [Gatsby guide](https://www.gatsbyjs.org/docs/preparing-your-environment/) for [Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/) or [Linux](https://www.gatsbyjs.org/docs/gatsby-on-linux/).
