import React from 'react'
import { graphql } from 'gatsby'
import ServicePage from '../../templates/servicePage'

export default (props) => (
	<ServicePage {...props} />
)

export const query = graphql`
	{
		contentfulService(slug: {eq: "desenvolvimento-sob-demanda"}) {
			title
			slug
			headline
			description {
				description
			}
			heroImage {
				fluid {
					...GatsbyContentfulFluid_withWebp
				}
			}
			products {
				title
				slug
				shortDescription
				hasLandingPage
			}
		}
	}
`
