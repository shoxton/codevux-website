import React from 'react'
import Img from 'gatsby-image'
import { Box, Text, Heading, Image, Stack, Tag, Flex, VisuallyHidden } from '@chakra-ui/core'

export default ({
	header: {
		title,
		formattedDate,
		fromNowDate,
		author,
		tags,
		featuredImage
	}
}) => (
	<Box pb={16}>

		<Title title={title} />
		<Box pb={4} >
			<Tags tags={tags} />
			<Meta
				author={author}
				tags={tags}
				formattedDate={formattedDate}
				fromNowDate={fromNowDate}
			/>
		</Box>

		{ featuredImage && <FeaturedImage featuredImage={featuredImage} /> }

	</Box>
)

export const Title = ({title}) => (
	<Heading
		color="gray.700"
		pb={4}
	>
		{title}
	</Heading>
)

export const Tags = ({tags}) => (

	<Stack
		isInline
		pb={2}
	>
		{tags?.nodes?.map((tag => (
			<Tag
				variantColor="teal"
				size="sm"
				key={tag.id}
			>
				{tag.name}
			</Tag>
		)))}
	</Stack>

)

export const Meta = ({ author, fromNowDate, formattedDate }) => (

	<Text
		as="span"
		color="gray.500"
		fontSize="sm"
	>
		por {" "}
		<Text as="b">
			{author.node.name}
		</Text>
		{" "}
		{fromNowDate}
		<VisuallyHidden>
			{`Publicado ${formattedDate}`}
		</VisuallyHidden>
	</Text>

)

export const FeaturedImage = ({featuredImage}) => (
	<Box
		overflow="hidden"
		borderRadius="md"
	>
		<Img fluid={featuredImage.node.localFile.childImageSharp.fluid} />
	</Box>
)
