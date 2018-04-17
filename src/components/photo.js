import React from 'react';
import GatsbyImage from 'gatsby-image';

export function Photo({ sizes, ...rest }) {
  return (
    <span {...rest}>
      <GatsbyImage sizes={sizes} />
    </span>
  );
}

export const photoFragment = graphql`
  fragment PhotoFragment on S3Image {
    Url
    Key
    localFile {
      childImageSharp {
        sizes(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;

