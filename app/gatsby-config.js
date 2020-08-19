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
  ],
};
