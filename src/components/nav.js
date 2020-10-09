import { Box, Stack, Heading, Button, useDisclosure, Icon, Flex } from '@chakra-ui/core'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useStaticQuery } from 'gatsby'
import Container from '../gatsby-plugin-chakra-ui/components/container'
import Link from '../gatsby-plugin-chakra-ui/components/link'
import NavMobile from './navMobile'
import { throttle } from 'lodash'

// using https://chakra-ui.com/drawer

const Nav = ({location, themeColor="light", ...props}) => {

	const theme = {
		"light": {
			bg: "white",
			color: "gray.700",
			borderColor: "gray.200"
		},
		"dark": {
			bg: "gray.700",
			color: "white",
			borderColor: "gray.500"
		}
	}

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [navBg, setNavBg] = useState(false)
	const navRef = useRef()
	navRef.current = navBg

	const invertThemeColor = () => {
		if(themeColor === "light") return "dark"
		return "light"
	}

	const data = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	useLayoutEffect(() => {
		const handleScroll = () => {
			console.log("executed")
			const show = window.scrollY > 120
			if(navRef.current !== show) {
				setNavBg(show)
			}
		}
		document.addEventListener('scroll', throttle(handleScroll, 200))
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	})

  return (
    <Box
			as="nav"
			width="100%"
			py={4}
			bg={navBg ? theme[invertThemeColor()].bg : "transparent"}
			pos="fixed"
			zIndex="sticky"
			color={navBg ? theme[invertThemeColor()].color : theme[themeColor].color}
			borderBottom={navBg ? "1px" : "none"}
			borderColor={navBg ? theme[invertThemeColor()].borderColor : "none"}
    >
			<Container justify="space-between" align="center">
				<Link
					to="/"
					_hover={{textDecoration: 'none'}}
				>
					<Flex
						alignItems="center"
					>
						<Icon name="codevux" size={{base: '33px', lg: '40px'}} />
						<Heading
							ml={-2}
							textTransform="uppercase"
							size="lg"
							fontWeight="800"

						>
							{data.site.siteMetadata.title}
						</Heading>
					</Flex>
				</Link>
				<Button size="sm" variant="outline" display={{ base: "block", lg: "none" }}  onClick={onOpen}>
					&#9776;
				</Button>

				<NavMenu isInline display={{ base: "none", lg: "flex" }} />
			</Container>
			<NavMobile isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export const NavMenu = ({children, ...props}) => (
	<Stack
		spacing={8}
		alignItems={["start", "start", "center"]}
		{...props}
	>
		<Link to="/solucoes">Serviços e soluções</Link>
		<Button
			to="/contato"
			as={Link}
			variantColor="teal"
			_hover={{textDecoration: 'none'}}
		>
			Fale conosco
		</Button>
	</Stack>
)

export default Nav
