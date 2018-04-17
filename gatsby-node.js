const path = require('path');
const slugify = require('limax');

exports.createPages = function createPages({ boundActionCreators, graphql }) {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      images:allS3Image(
          sort:{order:DESC, fields: [LastModified]}
        ) {
          edges {
            node {
              Key
            }
          }
        }
    }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      const { images } = result.data;

      const locationTemplate = path.resolve('src/templates/location.js');

      images.edges.forEach(({ node }) => {
        const location = slugify(node.Key.split('/').slice(0, 1).pop().replace(/^[\d-]+/, ''));
        createPage({
          path: `/location/${location}`,
          component: locationTemplate,
          context: {
            location: `/${location}.+/`
          }
        });
      });
    })
};