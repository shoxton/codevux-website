import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/core'
import Img from 'gatsby-image'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Link from '../gatsby-plugin-chakra-ui/components/link'

export const SolutionItem = ({title, logo, slug, shortDescription}) => (
	<Box
		p={8}
		bg="gray.700"
		borderRadius="md"
		boxShadow="md"
	>
		<Img fixed={logo.fixed} alt={logo.title} />
		<Heading
			as="h4"
			fontSize="2xl"
			fontWeight="medium"
			color="white"
			py={2}
		>
			<Link
				to={`/${slug}`}
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
			to={slug}
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
					logo {
						fixed (height: 36, width: 36, quality: 80) {
							...GatsbyContentfulFixed_withWebp_noBase64
						}
						title
					}
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
