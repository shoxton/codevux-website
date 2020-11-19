import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
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
	const navRef = useRef()
	const { height = 0 } = navRef.current?.getBoundingClientRect() ?? {}
	const [navBg, setNavBg] = useState(false)
	const showNavBg = () => setNavBg(window.scrollY > height)
	const throttledShowNavBg = useCallback(throttle(() => showNavBg(), 300 ), [navBg])

	useLayoutEffect(() => {
		throttledShowNavBg()
		document.addEventListener('scroll', throttledShowNavBg)
		return () => {
			document.removeEventListener('scroll', throttledShowNavBg)
		}
	},[navBg])

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
						dropdown {
							href
							label
							items {
								href
								label
							}
						}
					}
				}
			}
		}
	`)

  return (
    <Box
			ref={navRef}
			as="nav"
			width="100%"
			py={4}
			backgroundColor={navBg ? 'white' : "transparent"}
			pos="fixed"
			zIndex="sticky"
			color={navBg ? 'gray.700': theme[themeColor].color}
			borderBottom={navBg ? "1px" : '0'}
			borderColor={navBg ? "gray.100" : 'transparent'}
			transition="border-color .2s ease, background-color .2s ease"
    >
			<Container justify="space-between" align="center">
				<Brand title={title} />
				<NavBar
					menus={menus}
					themeColor={theme[themeColor]}
					display={{ base: "none", lg: "flex" }}
				/>
				<Button
					size="sm"
					variant="outline"
					display={{ base: "block", lg: "none" }}
					onClick={onOpen}
				>
					<Box as={FaBars} />
				</Button>
				<NavMobile
					menus={menus}
					themeColor={themeColor}
					isOpen={isOpen}
					onOpen={onOpen}
					onClose={onClose}
				/>
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
		spacing={8}
		{...props}
	>
		<Menu menuItems={menus} themeColor={themeColor} />
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
