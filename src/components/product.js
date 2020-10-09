import React from "react"
import { Box, Icon, Heading, Text, Button, SimpleGrid, Flex, List, ListItem, ListIcon } from "@chakra-ui/core"
import Link from "../gatsby-plugin-chakra-ui/components/link"

const ProductItem = ({context, title, slug, shortDescription, ...props}) => {
	return(
			<Flex
				flexDirection="column"
				p={8}
				borderRadius="md"
				bg="white"
				boxShadow="md"
				borderTop="4px"
				borderTopColor="teal.300"
				>
				<Link to={`/${context}/${slug}`}>
					<Heading
						as="h2"
						fontSize="2xl"
						fontWeight="medium"
						color="gray.700"
						mb={2}
					>
						{title}
					</Heading>
				</Link>
				<Text
					mb={2}
					color="gray.600"
				>
				{shortDescription}
				</Text>
				<Button
					color="gray.700"
					as={Link}
					variant="unstyled"
					textTransform="uppercase"
					height={Link.height}
					letterSpacing=".25px"
					size="sm"
					rightIcon="chevron-right"
					to={`/${context}/${slug}`}
				>
					Saiba mais
				</Button>
			</Flex>

	)
}

export const ProductList = ({ products, context, ...props }) => {

	return(
		<SimpleGrid spacing={4} columns={{base: 1, lg: 3}} {...props}>
			{
				products?.map((product, index) => (
						<ProductItem
							key={`${product.slug}-${index}`}
							context={context}
							{...product}
						/>
				))
			}
		</SimpleGrid>
	)
}

export const Perks = ({perks}) => (
	<List
		spacing={8}
		fontSize={{base: 'lg', lg:'xl'}}
	>
		{
			perks?.map((perk, index) => (
				<ListItem
					lineHeight="shorter"
					color="gray.700"
					key={`perk-${index}`}
				>
					<ListIcon icon="check-circle" color="teal.500" />
					{perk}
				</ListItem>
			))
		}
	</List>
)
export const Features = ({features}) => (
	<SimpleGrid spacing={{base: 8, lg: 16}} columns={{base: 1, lg: 3}} fontSize={{base: 'xl', lg:'2xl'}}>
		{
			features?.map((feature, index) => (
				<Flex key={`feature-${index}`}
					align="baseline"
				>
					<Icon mr={4} size={4} name="arrow-right" color="teal.500" />
					<Box>
						<Heading
							as="h4"
							fontSize={{base: 'xl', lg:'xl'}}
							color="gray.700"
							fontWeight="medium"
							mb={2}
						>
							{feature.title}
						</Heading>
						<Text
							color="gray.500"
							fontSize="lg"
							lineHeight="normal"
						>
							{feature.description}
						</Text>
					</Box>
				</Flex>
			))
		}
	</SimpleGrid>
)


export default ProductItem
