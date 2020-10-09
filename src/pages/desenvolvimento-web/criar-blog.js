import React from 'react'
import { graphql } from "gatsby"
import ProductPage from "../../templates/productPage"

export default (props) => (
	<ProductPage {...props} />
)



export const query = graphql`
	{
		contentfulProduct (slug: {eq: "criar-blog"})  {
			title
			slug
			perks
			headline
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
			belongsTo {
				slug
				product {
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
