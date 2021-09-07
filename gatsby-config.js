/* eslint-disable */

const assert = require('assert');
const appConfig = require('./appConfig');

require('dotenv').config();

const getEnv = (env, key) => {
  assert(
    env[key],
    `Please add the value for ${key} in your environment variables.`,
  );

  return env[key];
};

const { theme, spreadsheetLink, ...siteMetadata } = appConfig;

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/media`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `events-repo`,
        remote: getEnv(process.env, 'EVENTS_REPO'),
        branch: `main`,
        patterns: `events/*.csv`,
        local: `${__dirname}/data`,
      }
    },    
    {
      resolve: 'gatsby-transformer-csv',
      options:{
        delimiter: ','
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-event-calendar',
        short_name: 'starter-calendar',
        start_url: '/',
        background_color: theme.background,
        theme_color: theme.brand,
        display: 'minimal-ui',
        icon: 'media/icon.svg',
      },
    },
  ],
};
