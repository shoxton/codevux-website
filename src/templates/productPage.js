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
			heroImage,
			description: { description },
			perks,
			features,
			belongsTo
		},
		...props
	}
}) => {

	// const query = useStaticQuery(graphql`
	// 	query {
	// 		mobileImage: file(relativePath: { eq: "product_benefits.jpg" }) {
	// 			childImageSharp {
	// 				fluid(quality: 80, maxWidth: 700) {
	// 					...GatsbyImageSharpFluid_withWebp_noBase64
	// 				}
	// 			}
	// 		}
	// 		desktopImage: file(relativePath: { eq: "product_benefits.jpg" }) {
	// 			childImageSharp {
	// 				fluid(quality: 80, maxWidth: 1200) {
	// 					...GatsbyImageSharpFluid_withWebp_noBase64
	// 				}
	// 			}
	// 		}
	// 	}
	// `)


	// const imageSources = [
	// 	query.mobileImage.childImageSharp.fluid,
	// 	{
	// 		...query.desktopImage.childImageSharp.fluid,
	// 		media: `(min-width: 768px)`
	// 	}
	// ]


	return(
		<Layout themeColor="light">
			<SEO
				title={`${title}`}
				description={description}
			/>
			<Intro
				headline={headline}
				intro={description}
				btnText={`${title}`}
				to="/contato"
				variant="outline"
				variantColor="gray.700"
				_hover={{bg: "gray.700", color: "white", textDecoration: "none"}}
			>
				<Img
					alt={heroImage.title}
					fluid={heroImage.fluid}
				/>
			</Intro>
			<Section bg="gray.50">
				<Container>
					<SectionHeading
						heading="Leve seu negócio para o próximo nível"
						text="Benefícios e vantagens"
					/>
					<SimpleGrid spacing={16} columns={{base: 1, lg: 2}}>
						<Perks perks={perks} />
						{/* <Box
							borderRadius="lg"
							overflow="hidden"
						>
							<Img
								fluid={imageSources}
								alt={benefits.join(", ")}
							/>
						</Box> */}
					</SimpleGrid>
				</Container>
			</Section>
			<Section>
				<Container>
					<SectionHeading
						heading="Seu negócio sempre a frente dos concorrentes"
						text="Funcionalidades e diferenciais"
					/>
					<Features features={features}  />
				</Container>
			</Section>
			<CTA bg="gray.700" color="white" variant="solid" variantColor="teal" />
			<Section>
				<Container>
					<SectionHeading
						heading="Confira outras soluções"
						text="Não é o que você estava procurando?"
					/>
					<ProductList products={belongsTo.product} context={belongsTo.slug} />
				</Container>
			</Section>
		</Layout>
	)
}

export default ProductPage

