/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Roboto',
            variants: ['300', '300i', '400', '500', '700'],
          },
          {
            family: 'Oswald',
            variants: ['500', '700'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1udpjEu0hQhlEmSb0d92PwAiI8H-JYgM8Dk8mO9Bdt6A',
        credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
