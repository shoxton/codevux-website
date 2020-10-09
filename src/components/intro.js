import { Box, Button, Heading, Text, SimpleGrid } from '@chakra-ui/core'
import { Link } from 'gatsby'
import React from 'react'
import Container from '../gatsby-plugin-chakra-ui/components/container'


const Intro = ({headline, intro, btnText, to, children, backgroundImage="none", themeColor="light", ...props}) => {

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
		<Box
			bg={theme[themeColor].bg}
			pt={20}
			backgroundPosition="right"
			backgroundSize="contain"
			backgroundRepeat="no-repeat"
			backgroundImage={backgroundImage}
		>
			<Container minH={props.minH || `50vh`} py="15vh">
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
							fontSize={{base: 'lg', lg: 'xl'}}
							pb={4}
							color={theme[themeColor].intro}
						>
							{intro}
						</Text>
						{ btnText &&
							<Button
								as={Link}
								to={to}
								_hover={{textDecoration: 'none', ...Button._hover}}
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
			</Box>
	)
}

export default Intro
