import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { Section } from '../components/utils'
import Intro from '../components/intro'
import Container from "../gatsby-plugin-chakra-ui/components/container"
import { ProductList } from '../components/product'
import Layout from '../components/layout'


const ServicePage = ({
	data: {
		contentfulService: {
			slug,
			title,
			headline,
			description: {description},
			product
		}
	}
}) => (
	<Layout>
		{console.log(product)}
		<SEO
			title={title}
			description={description}
		/>
		<Intro
			headline={headline}
			intro={description}
			btnText="Fale conosco"
			to="/contato"
			variant="outline"
			variantColor="gray.700"
			_hover={{bg: "gray.700", color: "white", textDecoration: "none"}}
		/>
		<Container>
			<Section pt="0!important" >
				<ProductList products={product} context={slug} />
			</Section>
		</Container>
	</Layout>
)

export default ServicePage

