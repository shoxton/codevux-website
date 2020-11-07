import React from 'react'
import { graphql } from "gatsby"
import ProductPage from "../../templates/productPage"

export default (props) => (
	<ProductPage {...props} />
)




export const query = graphql`
	{
		contentfulProduct (slug: {eq: "gerenciamento-de-infraestrutura"})  {
			title
			slug
			metaTitle
			perks
			headline
			ctaText
			description {
				description
			}
			heroImage {
				fluid(quality: 80, maxHeight: 300) {
					...GatsbyContentfulFluid_withWebp_noBase64
				}
				title
			}
			features {
				title
				description
			}
			service {
				slug
				products {
					title
					slug
					shortDescription
				}
			}
			modules {
				title
				label
				media {
					fluid(quality: 80, maxHeight: 300) {
						...GatsbyContentfulFluid_withWebp_noBase64
					}
					title
				}
				headline
			}
		}
	}
`
