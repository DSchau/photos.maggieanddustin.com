const { config } = require('dotenv');

config();

const { AWS_ACCESS_KEY_ID: accessKeyId, AWS_SECRET_ACCESS_KEY: secretAccessKey } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Maggie & Dustin Photos',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-s3',
      options: {
        aws: {
          accessKeyId,
          secretAccessKey
        },
        buckets: [
          {
            Bucket: 'photos.dustinschau.com',
            MaxKeys: 200,
            Filter(item) {
              return item.Key.indexOf('thumb') === -1;
            }
          }
        ]
      }
    }
  ],
}
