import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/core'
import * as FaIcons from 'react-icons/fa'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Link from '../gatsby-plugin-chakra-ui/components/link'

export const SolutionItem = ({title, icon, slug, shortDescription}) => (
	<Box
		p={8}
		bg="gray.700"
		borderRadius="md"
		boxShadow="md"
	>
		<Box as={FaIcons[icon]} size="2.5rem" color="#fff" />
		<Heading
			as="h4"
			fontSize={{base: 'xl', lg: '2xl'}}
			fontWeight="medium"
			color="white"
			py={2}
		>
			<Link
				to={`/solucoes/${slug}`}
			>
				{title}
			</Link>
		</Heading>
		<Text
			color="gray.300"
			lineHeight="shorter"
			pb={2}
		>
			{shortDescription}
		</Text>
		<Button
			color="white"
			as={Link}
			variant="unstyled"
			textTransform="uppercase"
			height={Link.height}
			letterSpacing=".25px"
			size="sm"
			rightIcon="chevron-right"
			to={`/solucoes/${slug}`}
		>
			Saiba mais
		</Button>
	</Box>
)

export const SolutionList = () => {
	const {allContentfulSolution:{ nodes }} = useStaticQuery(graphql`
		{
			allContentfulSolution {
				nodes {
					title
					slug
					shortDescription
					icon
				}
			}
		}
	`)
	return (
			<SimpleGrid minChildWidth="300px" spacing={4}>
				{nodes?.map((solution, index) => (
					<SolutionItem
						{...solution}
						key={`solution-${index}`}
					/>
				))}
			</SimpleGrid>
	)
}

export default SolutionItem
