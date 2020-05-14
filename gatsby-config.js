const targetAddress = new URL(
  process.env.TARGET_ADDRESS || 'http://www.gregerhalltorp.local'
);

module.exports = {
  siteMetadata: {
    title: 'Greger Hälltorp',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: process.env.TARGET_BUCKET || 'fejk-bucket',
        region: process.env.AWS_REGION,
        protocol: targetAddress.protocol.slice(0, -1),
        hostname: targetAddress.hostname,
        acl: null,
        params: {},
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: targetAddress.href.slice(0, -1),
      },
    },
  ],
};
