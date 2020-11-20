import { Box, Heading, List, ListItem, Text, Button, SimpleGrid } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Link from '../gatsby-plugin-chakra-ui/components/link'

const ServiceItem = ({reversed, title, shortDescription, slug, products, ...props}) => {

	return (
		<Box
			boxShadow="md"
			borderRadius="md"
			bg="white"
			p={8}
			borderTop="4px"
			borderTopColor="teal.300"
			{...props}
		>
			<Heading
				as="h3"
				fontSize={{base: 'xl', lg: '2xl'}}
				fontWeight="medium"
				pb={2}
				color="gray.700"
			>
				<Link
					to={`/${slug}`}
				>
					{title}
				</Link>
			</Heading>
			<Text
				pb={2}
				fontSize={{base: 'md', lg: 'lg'}}
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
					products?.map((product, index) => (
						<ListItem
							as="h3"
							key={`${product.slug}-${index}`}
						>
							{product.hasLandingPage &&
							<Button
								fontWeight="medium"
								rightIcon="chevron-right"
								variant="unstyled"
								textDecoration="underline"
								_hover={{color: "teal.600", ...Button._hover}}
								fontSize="sm"
								color="gray.700"
								as={Link}
								to={`/${slug}/${product.slug}`}
							>
								{product.title}
							</Button>
							}
							{!product.hasLandingPage &&

							<Heading
								as="p"
								fontSize="sm"
								fontWeight="medium"
							>
								{product.title}
							</Heading>

							}

						</ListItem>
					))
				}

			</List>
		</Box>
	)
}

export const ServiceList = () => {
  const {allContentfulService:{ nodes }} = useStaticQuery(graphql`
    {
			allContentfulService(sort: {fields: createdAt})  {
				nodes {
					title
					slug
					shortDescription
					products {
						title
						slug
						hasLandingPage
					}
				}
			}
    }
	`)
	return (
		<SimpleGrid minChildWidth="300px" columns={{base: 1, lg: 3}} spacing={4}>
			{nodes?.map((service, index) => (
				<ServiceItem key={`${service.slug}-${index}`} {...service} />
				)
			)}
		</SimpleGrid>
	)
}


export default ServiceItem
