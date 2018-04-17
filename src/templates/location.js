import React from 'react';

import { Photogrid } from '../components/photo-grid';

export default function LocationPage({ data }) {
  const { images } = data;
  return (
    <Photogrid images={images.edges} />
  );
}

export const pageQuery = graphql`
  query LocationQuery($location: String!) {
    images:allS3Image(
        filter:{Key:{regex: $location}}
        sort:{order:DESC, fields: [LastModified]}
      ) {
      edges {
        node {
          ...PhotoFragment
        }
      }
    }
  }
`;