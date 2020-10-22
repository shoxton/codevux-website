import React from 'react'
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/core'
import { Link } from 'gatsby'

export default () => (
	<SimpleGrid
		columns={2}
	>
		<Card title="Lorem ipsum dolor" label="Próximo" />
		<Card title="Lorem ipsum dolor" label="Anterior" rightAligned />

	</SimpleGrid>
)

export const Card = ({title, label, rightAligned, ...props}) => (

	<Flex
		as={Link}
		to="/blog/ola-mundo"
		backgroundColor="gray.700"
		backgroundPosition="center"
		backgroundSize="cover"
		minH="180px"
		p={8}
		align="center"
		textAlign={rightAligned && "right" || "initial"}
		borderTopRightRadius={rightAligned ? "md" : "none"}
		borderBottomRightRadius={rightAligned ? "md" : "none"}
		borderTopLeftRadius={!rightAligned ? "md" : "none"}
		borderBottomLeftRadius={!rightAligned ? "md" : "none"}
	>
		<Box
			flex="1"
		>
			<Text
				color="gray.300"
				textTransform="uppercase"
				fontSize="sm"
				letterSpacing=".5px"
			>
				{label}
			</Text>
			<Heading
				as="h4"
				color="white"
				fontSize="2xl"
			>
				{title}
			</Heading>
		</Box>
	</Flex>

)
