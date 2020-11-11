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
			metaTitle
			headline
			ctaText
			description {
				description
			}
			heroImage {
				fluid(quality: 80, maxHeight: 300) {
					...GatsbyContentfulFluid_withWebp
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
					hasLandingPage
				}
			}
			modules {
				title
				label
				media {
					fluid(quality: 80, maxHeight: 300) {
						...GatsbyContentfulFluid_withWebp
					}
					title
				}
				headline
			}
		}
	}
`
