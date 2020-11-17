import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { Box, Button, Heading, List, ListItem, Stack } from '@chakra-ui/core'
import Link from '../gatsby-plugin-chakra-ui/components/link'

const Menu = ({label, href, megamenu, themeColor, ...props}) => {

	const megamenuRef = useRef()
	const [show, setShow] = useState(false)
	const handleClick = (e) => {
		if(megamenuRef.current.contains(e.target)) return
		setShow(false)
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClick)
		return() => document.removeEventListener('mousedown', handleClick)
	})

	return(
		<Box ref={megamenuRef} as="li" position="relative" {...props}>
			{href ?
				<Button
					as={Link}
					to={href}
					onClick={() => setShow(!show)}
					variant="ghost"
					size="sm"
					_hover={{textDecoration: 'none', backgroundColor: themeColor.state.hover.bg}}
					_active={{backgroundColor: themeColor.state.active.bg}}
				>
					{label}
				</Button> :
				<Button
					onClick={() => setShow(!show)}
					variant="ghost"
					size="sm"
					_hover={{textDecoration: 'none', backgroundColor: themeColor.state.hover.bg}}
					_active={{backgroundColor: themeColor.state.active.bg}}
					rightIcon={(megamenu && !show) ? `chevron-down` : `chevron-up`}
				>
					{label}
				</Button>
			}
			{megamenu && (
				<Stack
					onClick={handleClick}
					as={Megamenu}
					spacing={8}
					padding={12}
					isInline
					zIndex="dropdown"
					display={show?'flex':'none' }
					backgroundColor="white"
					boxShadow="md"
					borderRadius="md"
				>
					{megamenu.map((section, index) => (
						<MenuSection key={`megamenu-section-${index}`} {...section} />
					))}
				</Stack>
			)}
		</Box>

	)
}

export const MenuSection = ({label, href, subMenus, ...props}) => (
	<Box
		flex="1"
		{...props}
	>
		<Heading
			color="gray.700"
			fontSize=".7rem"
			textTransform="uppercase"
		>
			{href ? <Link to={href}>{label}</Link> : label }
		</Heading>
		<Stack as={List} mt={8} spacing={4}>
			{subMenus.map((subMenu, index) => (
				<ListItem
					lineHeight="shorter"
					color="gray.500"
					fontSize="14px"
					key={`submenu-${index}`}
				>
					<Link
						to={subMenu.href}
					>
						{subMenu.label}
					</Link>
				</ListItem>
			))}
		</Stack>
	</Box>
)

export default Menu

export const Megamenu = styled.div`

  position: absolute;
	bottom:0;
	left: 50%;
	transform: translate(-50%, calc(100% + 1.3rem));
	width: 675px;
	display: flex;

`


