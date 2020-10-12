import React from 'react'
import Img from 'gatsby-image'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { CTA, Section } from '../../components/utils'
import Container from '../../gatsby-plugin-chakra-ui/components/container'
import { SimpleGrid, Text, Heading, Box } from '@chakra-ui/core'


export default ({
	data: {
		contentfulSolution: {
			title,
			headline,
			description,
			features,
			heroImage
		}
	},
	...props
}) => {
	return (
		<Layout
			themeColor="light"
		>
			{console.log(props.data)}
			<SEO
				title={title}
				description={description.description}
			/>
			<Intro
				headline={headline}
				label={title}
				intro={description.description}
				themeColor="light"
			>
			<Img
				fluid={heroImage.fluid}
				alt={heroImage.title}
			/>
			</Intro>
			<Container>
				<Section pt="0!important" mt="-8vh" >
					<SimpleGrid minChildWidth="240px" spacing={16}>
						{features?.map((feature, index) => (
							<Box
								key={`feature-${index}`}
								backgroundColor="white"
							>
								<Img fixed={feature.icon.fixed} alt={feature.icon.title} />
								<Heading
									as="h2"
									fontSize="xl"
									fontWeight="medium"
									pb={{base: 2, lg: 4}}
									color="gray.700"
								>
									{feature.title}
								</Heading>
								<Text
									pb={{base: 2, lg: 4}}
									color="gray.600"
								>
									{feature.description}
								</Text>
							</Box>
						))}
					</SimpleGrid>
				</Section>
			</Container>
			<CTA text="Precisa de ajuda na sua loja Magento?" btn="Fale conosco" />
		</Layout>
	)
}

export const query = graphql`
	{
		contentfulSolution(slug: {eq: "magento"}) {
			slug
			title
			description {
				description
			}
			headline
			features {
				title
				description
				icon {
					fixed (height: 64, width: 64, quality: 80) {
						...GatsbyContentfulFixed_withWebp_noBase64
					}
				}
			}
			heroImage {
				fluid (maxHeight: 400, quality: 80) {
					...GatsbyContentfulFluid_withWebp_noBase64
				}
				title
			}
		}
	}
`
