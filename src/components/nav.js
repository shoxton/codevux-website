import React, { useLayoutEffect, useRef, useState } from 'react'
import { useStaticQuery } from 'gatsby'
import { throttle } from 'lodash'
import { Box, Stack, Heading, Button, useDisclosure, Icon, Flex, MenuGroup, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/core'
import Container from '../gatsby-plugin-chakra-ui/components/container'
import Link from '../gatsby-plugin-chakra-ui/components/link'
import NavMobile from './navMobile'
import { FaBars } from 'react-icons/fa'

// using https://chakra-ui.com/drawer

const Nav = ({location, themeColor="light", ...props}) => {

	const theme = {
		"light": {
			bg: "white",
			color: "gray.700",
			borderColor: "gray.200",
			menuHover: {
				bg: "gray.300"
			}
		},
		"dark": {
			bg: "gray.700",
			color: "white",
			borderColor: "gray.500",
			menuHover: {
				bg: "gray.100"
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
				<Brand title={data.site.siteMetadata.title} />
				<NavBar display={{ base: "none", lg: "flex" }} />
				<Button size="sm" variant="outline" display={{ base: "block", lg: "none" }}  onClick={onOpen}>
					<Box as={FaBars} />
				</Button>
				<NavMobile isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
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

export const NavBar = ({children, ...props}) => (
	<Stack
		isInline
		{...props}
	>
		<NavMenu />
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

export const NavMenu = () => (
	<Menu>
		<MenuButton
			as={Button} size="sm"
			variant="ghost"
			variantColor="gray.700"
			rightIcon="chevron-down"
			mr={8}
		>
			Serviços e soluções
		</MenuButton>
		<MenuList
			color="gray.700"
			py={4}
			px={2}
			placement="bottom-end"
		>
			<MenuGroup
				as={Link}
				to="/desenvolvimento-web"
				title="Desenvolvimento Web"
			>
				<Box borderLeft="1px" borderLeftColor="gray.300" mx={4} mb={4} >
					<MenuItem as={Link} to="/desenvolvimento-web/criar-site-institucional">Site institucional</MenuItem>
					<MenuItem as={Link} to="/desenvolvimento-web/criar-loja-virtual">Loja virtual</MenuItem>
					<MenuItem as={Link} to="/desenvolvimento-web/criar-blog">Blog</MenuItem>
				</Box>
			</MenuGroup>
			<MenuGroup
				as={Link}
				to="/integracao-de-sistemas"
				title="Integração de sistemas"
			>
				<Box borderLeft="1px" borderLeftColor="gray.300" mx={4} mb={4} >
					<MenuItem as={Link} to="/integracao-de-sistemas/integrar-marketplaces">Marketplaces</MenuItem>
					<MenuItem as={Link} to="/integracao-de-sistemas/integrar-meios-de-pagamento">Meios de pagamento</MenuItem>
					<MenuItem as={Link} to="/integracao-de-sistemas/integrar-transportadoras">Transportadoras</MenuItem>
				</Box>
			</MenuGroup>
			<MenuGroup as={Link} to="/suporte" title="Suporte e consultoria" />
			<MenuGroup as={Link} to="/magento" title="Soluções em Magento" />
		</MenuList>
	</Menu>
)

export default Nav
