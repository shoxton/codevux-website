import { Box, Heading, List, ListItem, Text, Button, Stack, SimpleGrid, PseudoBox } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Link from '../gatsby-plugin-chakra-ui/components/link'

const ServiceItem = ({reversed, title, shortDescription, slug, product, ...props}) => {

	return (
		<Box
			borderLeftWidth="3px"
			pl={4}
			borderColor="gray.200"
			mx={[-4, 'initial']}
			{...props}
		>
			<SimpleGrid
				columns={{base: 1, lg: 1}}
			>
				<Box
					order={{base: 2, lg:reversed ? 2: 1}}
				>
					<Heading
						as="h2"
						fontSize={{base: 'xl', lg: '2xl'}}
						fontWeight="medium"
						pb={{base: 2, lg: 4}}
						color="gray.700"
					>
						<Link
							to={`/${slug}`}
						>
							{title}
						</Link>
					</Heading>
					<Text
						fontSize={["md", "lg"]}
						lineHeight="shorter"
						pb={{base: 2, lg: 4}}
						color="gray.500"
					>
						{shortDescription}
					</Text>
					<List
						fontSize="lg"
						letterSpacing="wide"
						fontFamily="Montserrat"
						color="gray.700"
						pb={{base: 2, lg: 4}}
					>
						{
							product?.map((product, index) => (
								<ListItem
									as="h4"
									key={`${product.slug}-${index}`}
								>
									<Button
										fontWeight="medium"
										rightIcon="chevron-right"
										variant="unstyled"
										fontSize="sm"
										color="gray.700"
										as={Link}
										to={`/${slug}/${product.slug}`}
									>
										{product.title}
									</Button>
								</ListItem>
							))
						}

					</List>
				</Box>
				{/* <Img fluid={image.fluid} alt={image.title}/> */}
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
					slug
					shortDescription
					product {
						title
						slug
					}
				}
			}
    }
	`)
	return (
		<SimpleGrid columns={3} spacing={4}>
			{nodes?.map((service, index) => (
				(!(index % 2)) ?
				<ServiceItem key={`${service.slug}-${index}`} {...service} />
				:
				<ServiceItem key={`${service.slug}-${index}`} {...service} reversed />
				)
			)}
		</SimpleGrid>
	)
}


export default ServiceItem
