import React from 'react'
import { graphql } from "gatsby"
import ProductPage from "../../templates/productPage"

export default (props) => (
	<ProductPage {...props} />
)




export const query = graphql`
	{
    contentfulProduct(slug: {eq: "criar-site-institucional"}) {
      title
      slug
      description {
        description
      }
      image {
        fluid(quality: 80, maxHeight: 300) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        title
      }
      benefits
      features {
        title
        description
      }
      serviceCategory {
        slug
        product {
          title
          description {
            description
          }
          slug
        }
      }
    }
  }
`
