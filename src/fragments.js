import { graphql } from "gatsby"

export const fragments = graphql`
  fragment FeaturedImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`
