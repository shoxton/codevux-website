import React from 'react'
import { Box, Flex, Stack, Heading, Text, Button, Divider } from '@chakra-ui/core'
import Container from '../gatsby-plugin-chakra-ui/components/container'
import Link from '../gatsby-plugin-chakra-ui/components/link'

export const Section = ({children, ...props}) => (
	<Box w="full" as="section" py={{base: 16, lg: 32}} {...props} >
		{children}
	</Box>
)

export const SectionHeading = ({heading, text, ...props}) => (
	<Flex w="full" flexDirection={props.flexDirection || 'column'} mb={{base: 16, lg: 32}} {...props} >
		<Text
			textTransform="uppercase"
			letterSpacing="wide"
			lineHeight="shorter"
			fontSize={{base: 'sm', lg: 'xl'}}
			color="gray.500"
		>
			{ text }
		</Text>
		<Stack isInline align="baseline">
			<Heading
				as="h2"
				maxW="lg"
				fontWeight="medium"
				color="gray.700"
				fontSize={{base: '2xl', lg: '4xl'}}
			>
				{ heading }
			</Heading>
			<Divider display={{base: 'none', lg: 'block'}}  flex="1" border="1px" />
		</Stack>

		<Divider maxW={32} display={{base: 'block', lg: 'none'}} border="1px" />
	</Flex>
)

export const CTA = ({text, btn, action, ...props}) => (
	<Box
		bg={props.bg}
		color={props.color}
	>
		<Container
			textAlign="center"
			as={Container}
			align="center"
			justify="center"
			h="30vh"
		>
			<Box>
				<Heading
					as="p"
					mb={4}
					fontSize={{base: '2xl', lg: '4xl'}}
					lineHeight="none"
				>
					{text || 'Pronto pra otimizar o seu negócio?'}
				</Heading>
				<Button
					size="lg"
					_hover={{textDecoration: 'none'}}
					as={Link}
					to={action || '/contato'}
					variant={props.variant}
					variantColor={props.variantColor}
				>
					{btn || 'Comece agora'}
				</Button>
			</Box>
		</Container>
	</Box>
)

