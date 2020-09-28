import { Box, Heading, List, ListItem, Text, Button, Stack, SimpleGrid } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Link from '../gatsby-plugin-chakra-ui/components/link'

const ServiceItem = ({reversed, title, description, image, slug, product, ...props}) => {

	return (
		<Box
			borderRadius={{base: 'none', lg: 'md'}}
			bg="white"
			overflow="hidden"
			borderWidth='1px'
			borderColor='gray.200'
			mx={[-4, 'initial']}
			{...props}
		>
			<SimpleGrid
				columns={{base: 1, lg: 2}}
			>
				<Box
					order={{base: 2, lg:reversed ? 2: 1}}
					px={{base: 8, lg: 16}}
					py={{base: 8, lg: 16}}
				>
					<Heading
						as="h2"
						fontSize={{base: '2xl', lg: '3xl'}}
						fontWeight="medium"
						pb={{base: 2, lg: 4}}
						color="gray.700"
					>
						{title}
					</Heading>
					<Text
						fontSize={["lg", "xl"]}
						lineHeight="shorter"
						pb={{base: 2, lg: 4}}
						color="gray.500"
					>
						{description}
					</Text>
					<List
						fontSize="lg"
						letterSpacing="wide"
						fontFamily="Montserrat"
						color="gray.700"
						pb={{base: 2, lg: 4}}
					>
						{
							product.map((product, index) => (
								<ListItem
									as="h4"
									key={`${product.slug}-${index}`}
								>
									<Button
										fontWeight="bold"
										textDecoration="underline"
										rightIcon="chevron-right"
										variant="unstyled"
										as={Link}
										to={`/${slug}/${product.slug}`}
									>
										{product.title}
									</Button>
								</ListItem>
							))
						}

					</List>
					<Button
						to={`/${slug}`}
						as={Link}
						variant="outline"
						variantColor="gray.700"
						_hover={{color: 'white', bg: 'gray.700', textDecoration: 'none'}}
					>
						Saiba mais
					</Button>
				</Box>
				<Img fluid={image.fluid} alt={image.title}/>
			</SimpleGrid>
		</Box>
	)
}

export const ServiceList = () => {
  const {allContentfulService:{ nodes }} = useStaticQuery(graphql`
    {
			allContentfulService {
				nodes {
					title
					description
					slug
					image {
						fluid(quality: 80, maxHeight: 300) {
							...GatsbyContentfulFluid_withWebp_noBase64
						}
						title
					}
					product {
						title
						slug
					}
				}
			}
    }
	`)
	return (
		<Stack spacing={32}>
			{nodes.map((service, index) => (
				(!(index % 2)) ?
				<ServiceItem key={`${service.slug}-${index}`} {...service} />
				:
				<ServiceItem key={`${service.slug}-${index}`} {...service} reversed />
				)
			)}
		</Stack>
	)
}


export default ServiceItem
