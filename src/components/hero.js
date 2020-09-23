import React from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/core'
import Container from '../gatsby-plugin-chakra-ui/components/container'

const Hero = () => {

	return (
		<Flex h="100vh" bg="gray.700">
			<Container align="center">
				<Box maxW={{md:"2xl"}}>
					<Heading
						as="p"
						fontWeight="medium"
						textTransform="uppercase"
						fontSize="lg"
						letterSpacing="wider"
						color="gray.500"
					>
						Desenvolvimento web
					</Heading>
					<Heading
						fontWeight="bold"
						as="h1"
						my={2}
						color="white"
						fontSize={{base: '3xl', md: '5xl'}}
					>
						Inovação e tecnologia trabalhando a seu favor
					</Heading>
					<Text
						color="gray.200"
						fontSize={{base: 'xl', md: '3xl'}}
						lineHeight="shorter"
						mb={2}
					>
						Desenvolvemos soluções que impactam você, seu negócio e seu cliente.
					</Text>
					<Button
						size="lg"
						variantColor="teal"
						mt={4}
					>
						Comece agora
					</Button>
				</Box>
			</Container>
		</Flex>
)
}

export default Hero
