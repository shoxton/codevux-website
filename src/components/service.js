import { Box, Heading, List, ListItem, Text, Button, Stack, SimpleGrid, PseudoBox } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
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
				as="h2"
				fontSize="2xl"
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
				lineHeight="shorter"
				pb={2}
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
							as="h4"
							key={`${product.slug}-${index}`}
						>
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
			allContentfulService {
				nodes {
					title
					slug
					shortDescription
					products {
						title
						slug
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
