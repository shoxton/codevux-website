import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/core'
import Img from 'gatsby-image'
import { Section } from '../components/utils'
import Intro from '../components/intro'
import { Benefits, Features, ProductList } from "../components/product"
import SEO from "../components/seo"
import { CTA, SectionHeading } from "../components/utils"
import Container from "../gatsby-plugin-chakra-ui/components/container"
import { graphql, useStaticQuery } from 'gatsby'


export const ProductPage = (props) => {

	const query = useStaticQuery(graphql`
		query {
			mobileImage: file(relativePath: { eq: "product_benefits.jpg" }) {
				childImageSharp {
					fluid(quality: 80, maxWidth: 700) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			desktopImage: file(relativePath: { eq: "product_benefits.jpg" }) {
				childImageSharp {
					fluid(quality: 80, maxWidth: 1200) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
		}
	`)


	const imageSources = [
		query.mobileImage.childImageSharp.fluid,
		{
			...query.desktopImage.childImageSharp.fluid,
			media: `(min-width: 768px)`
		}
	]


	return(
		<Box>
			<SEO
				title={`Criar ${props.data.contentfulProduct.title}`}
				description={props.data.contentfulProduct.description.description}
			/>
			<Intro
				headline={props.data.contentfulProduct.title}
				intro={props.data.contentfulProduct.description.description}
				btnText={`Criar ${props.data.contentfulProduct.title}`}
				to="/contato"
				variant="outline"
				variantColor="gray.700"
				_hover={{bg: "gray.700", color: "white", textDecoration: "none"}}
			>
				<Img
					alt={props.data.contentfulProduct.image.title}
					fluid={props.data.contentfulProduct.image.fluid}
				/>
			</Intro>
			<Container flexDirection="column" >
				<Section>
					<SectionHeading
						heading="Leve seu negócio para o próximo nível"
						text="Benefícios e vantagens"
					/>
					<SimpleGrid spacing={16} columns={{base: 1, lg: 2}}>
						<Benefits benefits={props.data.contentfulProduct.benefits} />
						<Box
							borderRadius="lg"
							overflow="hidden"
						>
							<Img
								fluid={imageSources}
								alt={props.data.contentfulProduct.benefits.join(", ")}
							/>
						</Box>
					</SimpleGrid>
				</Section>
				<Section>
					<SectionHeading
						heading="Seu negócio sempre a frente dos concorrentes"
						text="Funcionalidades e diferenciais"
					/>
					<Features features={props.data.contentfulProduct.features}  />
				</Section>
			</Container>
			<CTA bg="gray.700" color="white" variant="solid" variantColor="teal" />
			<Container>
				<Section>
					<SectionHeading
						heading="Confira outras soluções"
						text="Não é o que você estava procurando?"
					/>
					<ProductList service={props.data.contentfulProduct.serviceCategory} />
				</Section>
			</Container>
		</Box>
	)
}

export default ProductPage
