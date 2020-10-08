import { Box, Heading, List, ListItem, Text, Button, Stack, SimpleGrid, PseudoBox } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Link from '../gatsby-plugin-chakra-ui/components/link'

const ServiceItem = ({reversed, title, shortDescription, slug, product, ...props}) => {

	return (
		<Box
			boxShadow="md"
			borderRadius="md"
			mx={[-4, 'initial']}
			bg="white"
			p={{base: 4, lg: 8}}
			borderTop="4px"
			borderTopColor="teal.300"
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
						lineHeight="shorter"
						pb={{base: 2, lg: 4}}
						color="gray.600"
					>
						{shortDescription}
					</Text>
					<List
						fontSize="lg"
						letterSpacing="wide"
						fontFamily="Montserrat"
						color="gray.700"
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
										textDecoration="underline"
										style={{textDecorationStyle: "dotted"}}
										_hover={{color: "teal.600", ...Button._hover}}
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
		<SimpleGrid  p={{base: 4, lg: 0}} columns={{base: 1, lg: 3}} spacing={4}>
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
