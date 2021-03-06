import { Box, Button, Heading, Text, Grid } from '@chakra-ui/core'
import { Link } from 'gatsby'
import React from 'react'
import Container from '../gatsby-plugin-chakra-ui/components/container'


const Intro = ({
	headline,
	intro,
	label,
	btnText,
	to,
	children,
	backgroundColor,
	backgroundImage,
	themeColor="light",
	...props
}) => {

	const theme = {
		"light": {
			bg: "white",
			heading: "gray.700",
			intro: "gray.500",
			btn: "gray",
			label: "teal.500"
		},
		"dark": {
			bg: "gray.700",
			heading: "white",
			intro: "gray.200",
			btn: "white",
			label: "teal.300"
		}
	}

	return(
		<Box
			pt={20}
			backgroundColor={backgroundColor ? backgroundColor : theme[themeColor].bg}
			backgroundPosition="right"
			backgroundSize={{base: "cover", lg: "contain"}}
			backgroundRepeat="no-repeat"
			backgroundImage={backgroundImage ? `url(${backgroundImage})` : `none`}
		>
			<Container minH={props.minH || `50vh`} py="15vh">
				<Grid spacing={4} alignItems="center" gridTemplateColumns={{base: '1fr', lg: props.columns || `1fr 1fr`}}>
					<Box maxW={{lg:"2xl"}}>
						{label &&
							<Heading
								as="h1"
								color={theme[themeColor].label}
								textTransform="uppercase"
								fontSize="sm"
								letterSpacing=".25px"
								mb={2}
							>
								{label}
							</Heading>
						}
						<Heading
							color={theme[themeColor].heading}
							pb={2}
							as="h2"
							fontSize={{base: '2xl', lg: '4xl'}}
						>
							{headline}
						</Heading>
						<Text
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
								variant={props.variant}
								variantColor={props.variantColor}
								color={props.color}
								size="sm"
								lineHeight="1.5"
								_hover={{textDecoration: 'none', ...Button._hover, ...props._hover}}
							>
								{btnText}
							</Button>
						}
					</Box>
					<Box>
						{children}
					</Box>
				</Grid>
			</Container>
			</Box>
	)
}

export default Intro
