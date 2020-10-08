import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { Section } from '../components/utils'
import Intro from '../components/intro'
import Container from "../gatsby-plugin-chakra-ui/components/container"
import { ProductList } from '../components/product'
import Layout from '../components/layout'
import { Box, PseudoBox } from '@chakra-ui/core'
import Img from "gatsby-image"


const ServicePage = ({
	data: {
		contentfulService: {
			slug,
			title,
			heroImage,
			headline,
			description: {description},
			product
		}
	},
	...props
}) => (
	<Layout themeColor="dark" >
		{console.log(props)}
		<SEO
			title={title}
			description={description}
		/>
		<Intro
			headline={headline}
			intro={description}
			themeColor="dark"
			btnText="Fale conosco"
			to="/contato"
			variant="outline"
			variantColor="gray.700"
			_hover={{bg: "gray.700", color: "white", textDecoration: "none"}}
		>
			{console.log(heroImage)}
			{/* <Img

				fluid={heroImage.fluid}
			/> */}
		</Intro>
		<Container>
			<Section pt="0!important" mt={-16}>
				<ProductList products={product} context={slug} />
			</Section>
		</Container>
	</Layout>
)

export default ServicePage

