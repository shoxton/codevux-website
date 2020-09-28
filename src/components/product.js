import React from "react"
import { Box, Icon, Heading, Text, Button, SimpleGrid, Flex } from "@chakra-ui/core"
import Link from "../gatsby-plugin-chakra-ui/components/link"

const ProductItem = ({title, description, slug, service, ...props}) => {
	return(
			<Flex
				flexDirection="column"
				p={8}
				borderRadius="md"
				bg="white"
				border="1px"
				borderColor="gray.200"
				>
				<Link to={`/${service.slug}/${slug}`}>
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
					{description.description}
				</Text>
				<Button
					color="gray.700"
					as={Link}
					variant="unstyled"
					rightIcon="chevron-right"
					to={`/${service.slug}/${slug}`}
				>
					Saiba mais
				</Button>
			</Flex>

	)
}

export const ProductList = ({ service, ...props}) => {

	return(
		<SimpleGrid spacing={4} columns={{base: 1, lg: 3}} {...props}>
			{
				service.product.map((product, index) => (
						<ProductItem service={service} key={`${product.slug}-${index}`} {...product} />
				))
			}
		</SimpleGrid>
	)
}

export const Benefits = ({benefits}) => (
	<SimpleGrid
		columns={{base: 1}}
		spacing={4}
		fontSize={{base: 'lg', lg:'xl'}}
	>
		{
			benefits.map((benefit, index) => (
				<Flex
					align="center"
					lineHeight="shorter"
					color="gray.700"
					key={`benefit-${index}`}
				>
					<Icon size={8} name="chevron-right" color="teal.500" />
					<Text>{benefit}</Text>
				</Flex>
			))
		}
	</SimpleGrid>
)
export const Features = ({features}) => (
	<SimpleGrid spacing={{base: 8, lg: 16}} columns={{base: 1, lg: 3}} fontSize={{base: 'xl', lg:'2xl'}}>
		{
			features.map((feature, index) => (
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
