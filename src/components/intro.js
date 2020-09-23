import { Flex, Box, Button, Heading, Text, SimpleGrid } from '@chakra-ui/core'
import React from 'react'
import Container from '../gatsby-plugin-chakra-ui/components/container'
import Link from '../gatsby-plugin-chakra-ui/components/link'


const Intro = ({headline, intro, btnText, to, children, ...props}) => (
	<Container minH="50vh" bg="white" color="gray.700" py="5vh">
		<SimpleGrid  spacing={4} alignItems="center" columns={{base: 1, lg: 2}}>
			<Box maxW={{lg:"2xl"}}>
				<Heading pb={2} as="h1">
					{headline}
				</Heading>
				<Text
					lineHeight="shorter"
					fontSize={{base: 'xl', lg: '2xl'}}
					pb={4}
					color="gray.500"
				>
					{intro}
				</Text>
				{ btnText &&
					<Button
						as={Link}
						to={to}
						_hover={{textDecoration: 'none', ...props._hover}}
						variant={props.variant || "outline"}
						variantColor={props.variantColor}
					>
						{btnText}
					</Button>
				}
			</Box>
			<Box>
				{children}
			</Box>
		</SimpleGrid>
	</Container>
)

export default Intro
