import React from 'react'
import { Box, Stack, Text } from '@chakra-ui/core'
import '@wordpress/block-library/build-style/style.css'
import Link from '../../gatsby-plugin-chakra-ui/components/link'

export default ({content, ...props}) => {

	return (
		<Box
			dangerouslySetInnerHTML={{ __html: content }}
			{...props}
		/>

	)
}

export const ContentNav = ({content, ...props}) => {

	const parser = new DOMParser()

	// get all h2 tags with an id
	const headings = content.match(/<h2 ([\s\S]*?)>([\s\S]*?)<\/h2>/g)

	// parse string to html and return needed attributes
	const topics = headings?.map(heading => {
		let parsedHeading = parser.parseFromString(heading, 'text/html').getElementsByTagName('h2')[0]
		return {
			text: parsedHeading.innerHTML,
			id: parsedHeading.id
		}
	}) || []

	return(

		<Box
			display={["none", "none", "none", "block"]}
			mr={8}
			position="sticky"
			top="70px"
			{...props}
		>
			<Text
				textTransform="uppercase"
				color="gray.500"
				fontSize="sm"
				fontWeight="bold"
				letterSpacing=".5px"
				fontFamily="Montserrat"
				pb={4}
			>
					Conteúdo
			</Text>
			<Stack shouldWrapChildren spacing={4}>
				{topics.map(topic => <ContentNavLink key={topic.id} text={topic.text} href={topic.id} />)}
			</Stack>
		</Box>

	)

}

export const ContentNavLink = ({text, href}) => (
	<Link
		to={`#${href}`}
		fontSize="sm"
		fontWeight="bold"
		color="gray.400"
		lineHeight="normal"
		_hover={{
			color: "gray.500",
			...Link._hover
		}}
	>
		{text}
	</Link>
)
