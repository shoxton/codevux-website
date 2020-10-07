import React from 'react'
import { graphql } from 'gatsby'
import ServicePage from '../../templates/servicePage'

export default (props) => (
	<ServicePage {...props} />
)

export const query = graphql`
	{
		contentfulService(slug: {eq: "desenvolvimento-web"}) {
			title
			slug
			headline
			description {
				description
			}
			heroImage {
				fluid {
					...GatsbyContentfulFluid_withWebp_noBase64
				}
			}
			product {
				title
				slug
				shortDescription
			}
		}
	}
`

