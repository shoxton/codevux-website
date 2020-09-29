import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../../components/seo"
import { Section } from '../../components/utils'
import Intro from '../../components/intro'
import Container from "../../gatsby-plugin-chakra-ui/components/container"
import { ProductList } from '../../components/product'
import Layout from '../../components/layout'


export default (props) => (
	<Layout>
		<SEO
			title={props.data.contentfulService.title}
			description={props.data.contentfulService.description}
		/>
		<Intro
			headline={props.data.contentfulService.title}
			intro={props.data.contentfulService.description}
			btnText="Fale conosco"
			to="/contato"
			variant="outline"
			variantColor="gray.700"
			_hover={{bg: "gray.700", color: "white", textDecoration: "none"}}
		/>
		<Container>
			<Section pt="0!important" >
				<ProductList service={props.data.contentfulService} />
			</Section>
		</Container>
	</Layout>
)

export const query = graphql`
	{
		contentfulService {
			title
			slug
			description
			product {
				title
				description {
					description
				}
				slug
			}
			image {
				fluid(quality: 80, maxHeight: 300) {
					...GatsbyContentfulFluid_withWebp_noBase64
				}
				title
			}
		}
	}
`

