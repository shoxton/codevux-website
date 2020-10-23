import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/core'
import Img from 'gatsby-image'
import { Section } from '../components/utils'
import Intro from '../components/intro'
import { Perks, Features, ProductList } from "../components/product"
import SEO from "../components/seo"
import { CTA, SectionHeading } from "../components/utils"
import Container from "../gatsby-plugin-chakra-ui/components/container"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'


export const ProductPage = ({
	data: {
		contentfulProduct: {
			title,
			headline,
			ctaText,
			heroImage,
			description: { description },
			perks,
			features,
			service,
			modules
		},
		...props
	}
}) => {

	return(
		<Layout themeColor="light">
			<SEO
				title={ctaText}
				description={description}
				image={heroImage?.fluid}
			/>
			<Intro
				headline={headline}
				intro={description}
				label={title}
				btnText={ctaText}
				variant="outline"
				variantColor="teal"
				color="teal.500"
				_hover={{bg: "teal.50"}}

				to="/contato"
			>
				<Img
					alt={heroImage?.title}
					fluid={heroImage?.fluid}
				/>
			</Intro>
			<Section bg="gray.50">
				<Container>
					<SectionHeading
						heading={modules[0].headline}
						text={modules[0].label}
					/>
					<SimpleGrid
						width="100%"
						spacing={8}
						columns={{base: 1, lg: 2}}
						alignItems="center"
					>
						<Perks perks={perks} />
						<Box>
							<Img
								fluid={modules[0].media.fluid}
							/>
						</Box>
					</SimpleGrid>
				</Container>
			</Section>
			<Section>
				<Container>
					<SectionHeading
						heading={modules[1].headline}
						text={modules[1].label}
					/>
					<Features features={features}  />
				</Container>
			</Section>
			<CTA bg="gray.700" color="white" variant="solid" variantColor="teal" />
			<Container>
				<Section>
					<SectionHeading
						heading="Confira outras soluções"
						text="Não é o que você estava procurando?"
					/>
					<ProductList products={service[0].products} context={service[0].slug} />
				</Section>
			</Container>
		</Layout>
	)
}

export default ProductPage

