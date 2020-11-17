import React, { useLayoutEffect, useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { throttle } from 'lodash'
import { Box, Stack, Heading, Button, useDisclosure, Icon, Flex } from '@chakra-ui/core'
import Container from '../gatsby-plugin-chakra-ui/components/container'
import Link from '../gatsby-plugin-chakra-ui/components/link'
import NavMobile from './navMobile'
import { FaBars } from 'react-icons/fa'
import Menu from './menu'

// using https://chakra-ui.com/drawer

const Nav = ({location, themeColor="light", ...props}) => {

	const theme = {
		"light": {
			bg: "white",
			color: "gray.700",
			borderColor: "gray.200",
			state: {
				hover: {
					bg: "gray.100"
				},
				active: {
					bg: "gray.200"
				}
			}
		},
		"dark": {
			bg: "gray.700",
			color: "white",
			borderColor: "gray.500",
			state: {
				hover: {
					bg: "gray.600"
				},
				active: {
					bg: "gray.500"
				}
			}
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

	const {site:{siteMetadata: {
		title,
		menus
	}}} = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
					title
					menus {
						label
						megamenu {
							href
							label
							subMenus {
								href
								label
							}
						}
					}
				}
			}
		}
	`)

	useLayoutEffect(() => {
		const handleScroll = () => {
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
				<Brand title={title} />
				<NavBar menus={menus} themeColor={navBg ? theme[invertThemeColor()] : theme[themeColor]} display={{ base: "none", lg: "flex" }} />
				<Button size="sm" variant="outline" display={{ base: "block", lg: "none" }}  onClick={onOpen}>
					<Box as={FaBars} />
				</Button>
				<NavMobile menus={menus} themeColor={themeColor} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
			</Container>
    </Box>
  );
};

export const Brand = ({title}) => (
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
				{title}
			</Heading>
		</Flex>
	</Link>
)

export const NavBar = ({children, menus, themeColor, ...props}) => (
	<Stack
		isInline
		as="ul"
		listStyleType="none"
		spacing={8}
		{...props}
	>
		{menus.map((menu, index) => <Menu themeColor={themeColor} key={`menu-${index}`} {...menu} />)}
		<Button
			to="/contato"
			as={Link}
			variantColor="teal"
			size="sm"
			_hover={{textDecoration: 'none', ...Button._hover}}
		>
			Fale conosco
		</Button>
	</Stack>
)

export default Nav
