import React from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/core'
import Container from '../gatsby-plugin-chakra-ui/components/container'
import { Link } from 'gatsby'

const Hero = () => {

	return (
		<Flex h="100vh" bg="">
			<Container align="center">
				<Box maxW={{lg:"2xl"}}>
					<Heading
						as="p"
						fontWeight="medium"
						textTransform="uppercase"
						letterSpacing="wider"
						color="gray.500"
						fontSize={{base: 'sm', lg: 'lg'}}
					>
						Desenvolvimento web
					</Heading>
					<Heading
						fontWeight="bold"
						as="h1"
						my={2}
						color="gray.700"
						fontSize={{base: '3xl', lg: '5xl'}}
					>
						Inovação e tecnologia trabalhando a seu favor
					</Heading>
					<Text
						color="gray.500"
						fontSize={{base: 'xl', lg: '3xl'}}
						lineHeight="shorter"
						mb={2}
					>
						Desenvolvemos soluções que impactam você, seu negócio e seu cliente.
					</Text>
					<Button
						as={Link}
						to="/contato"
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
