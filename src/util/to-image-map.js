export function toImageMap({ node }) {
  return {
    Url: node.Url,
    sizes: node.localFile.childImageSharp.sizes
  };
}
