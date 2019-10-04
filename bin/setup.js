const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const { writeFileSync } = require('fs')

const argv = require('yargs-parser')(process.argv.slice(2))

console.log(`
  To set up this project you need to provide your Contentful ${chalk.yellow('Space ID')}
  and ${chalk.yellow('Access Token')}.
  `)

const questions = [
  {
    name: 'spaceId',
    message: 'Your Space ID',
    when: !argv.spaceId && !process.env.CONTENTFUL_SPACE_ID,
    validate: input =>
      /^[a-z0-9]{12}$/.test(input) ||
      'Space ID must be 12 lowercase characters',
  },
  {
    name: 'accessToken',
    when: !argv.accessToken && !process.env.CONTENTFUL_ACCESS_TOKEN_TOKEN,
    message: 'Your Access Token',
  },
]

inquirer
  .prompt(questions)
  .then(({ spaceId, accessToken }) => {
    const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

    spaceId = CONTENTFUL_SPACE_ID || argv.spaceId || spaceId
    accessToken =
      CONTENTFUL_ACCESS_TOKEN || argv.accessToken || accessToken

    console.log('Writing config file...')
    const configFiles = [`.env.development`, `.env.production`]
      .map(file => path.join(__dirname, '..', file))

    const devContents = [
      `CONTENTFUL_SPACE_ID=${spaceId}`,
      `CONTENTFUL_ACCESS_TOKEN=${accessToken}`,
      `CONTENTFUL_ENV=development`
    ].join('\n') + '\n'

    const prodContents = [
      `CONTENTFUL_SPACE_ID=${spaceId}`,
      `CONTENTFUL_ACCESS_TOKEN=${accessToken}`,
      `CONTENTFUL_ENV=master`
    ].join('\n') + '\n'

    configFiles.forEach(file => {
      if (file.includes('.env.development')) {
        writeFileSync(file, devContents, 'utf8')
      } else if (file.includes('.env.production')) {
        writeFileSync(file, prodContents, 'utf8')
      }
      console.log(`Config file ${chalk.yellow(file)} written`)
    })
    return { spaceId }
  })
  .then((_, error) => {
    console.log(
      `All set! You can now run ${chalk.yellow(
        'yarn develop'
      )} to see it in action.`
    )
  })
  .catch(error => console.error(error))
