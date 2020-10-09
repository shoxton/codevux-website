import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { Section } from '../components/utils'
import Intro from '../components/intro'
import Container from "../gatsby-plugin-chakra-ui/components/container"
import { ProductList } from '../components/product'
import Layout from '../components/layout'
import { Box, Heading, PseudoBox } from '@chakra-ui/core'
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
			backgroundImage={heroImage?.fluid.src}

		>
			{console.log(heroImage)}
		</Intro>
		<Container>
			<Section pt="0!important" mt="-8vh">
				<ProductList products={product} context={slug} />
			</Section>
		</Container>
	</Layout>
)

export default ServicePage

