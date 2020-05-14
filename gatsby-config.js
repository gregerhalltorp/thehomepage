const targetAddress = new URL(
  process.env.TARGET_ADDRESS || 'https://gregerhalltorp.net'
);

console.log('TARGET_ADDRESS', process.env.TARGET_ADDRESS);
console.log('TARGET_BUCKET_NAME', process.env.TARGET_BUCKET_NAME);
console.log('AWS_REGION', process.env.AWS_REGION)

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
        bucketName: process.env.TARGET_BUCKET_NAME || 'fejk-bucket',
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
