import { Box, Button, Heading, Text, SimpleGrid } from '@chakra-ui/core'
import React from 'react'
import Container from '../gatsby-plugin-chakra-ui/components/container'
import Link from '../gatsby-plugin-chakra-ui/components/link'


const Intro = ({headline, intro, btnText, to, children, themeColor="light", ...props}) => {

	const theme = {
		"light": {
			bg: "white",
			heading: "gray.700",
			intro: "gray.500",
			btn: "gray"
		},
		"dark": {
			bg: "gray.700",
			heading: "white",
			intro: "gray.200",
			btn: "white"
		}
	}

	return(
		<Box bg={theme[themeColor].bg}>
			<Container minH={props.minH || `50vh`} py="5vh" {...props} >
				<SimpleGrid  spacing={4} alignItems="center" columns={{base: 1, lg: 2}}>
					<Box maxW={{lg:"2xl"}}>
						<Heading
							color={theme[themeColor].heading}
							pb={2}
							as="h1"
						>
							{headline}
						</Heading>
						<Text
							lineHeight="shorter"
							fontSize={{base: 'xl', lg: '2xl'}}
							pb={4}
							color={theme[themeColor].intro}
						>
							{intro}
						</Text>
						{ btnText &&
							<Link
								as={Button}
								to={to}
								_hover={{textDecoration: 'none', ...Button._hover}}
								variant="solid"
								variantColor={theme[themeColor].btn}
							>
								{btnText}
							</Link>
						}
					</Box>
					<Box>
						{children}
					</Box>
				</SimpleGrid>
			</Container>
			</Box>
	)
}

export default Intro
