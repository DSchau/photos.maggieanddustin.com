import React from 'react'
import Link from 'gatsby-link'

import { Photogrid } from '../components/photo-grid';

export default function IndexPage({ data }) {
  const { images } = data;
  return (
    <Photogrid images={images.edges} />
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    images:allS3Image(
        filter:{Key:{regex:"/[^thumb].jpeg$/"}}
        sort:{order:DESC, fields: [LastModified]}
        limit:20
      ) {
      edges {
        node {
          ...PhotoFragment
        }
      }
    }
  }
`;
