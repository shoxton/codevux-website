import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { Box, Button, Heading, List, ListItem, Stack } from '@chakra-ui/core'
import Link from '../gatsby-plugin-chakra-ui/components/link'

const Menu = ({menuItems, themeColor, ...rest}) => (
	<List {...rest}>
		{menuItems.map((menuItem, index) => <MenuItem themeColor={themeColor} key={`menu-item-${index}`} {...menuItem} />)}
	</List>
)

const MenuItem = ({label, href, dropdown, themeColor, ...props}) => {

	const dropdownRef = useRef()
	const [show, setShow] = useState(false)
	const handleClick = (e) => {
		if(dropdownRef.current.contains(e.target)) return
		setShow(false)
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClick)
		return() => document.removeEventListener('mousedown', handleClick)
	})

	return(
		<Box ref={dropdownRef} as={ListItem} {...props}>
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
					rightIcon={(dropdown && !show) ? `chevron-down` : `chevron-up`}
				>
					{label}
				</Button>
			}
			{dropdown && (
				<Stack
					onClick={handleClick}
					as={Dropdown}
					spacing={8}
					padding={12}
					isInline
					zIndex="dropdown"
					display={show?'flex':'none' }
					backgroundColor="white"
					boxShadow="xl"
					borderRadius="md"
				>
					{dropdown.map((section, index) => (
						<MenuSection key={`dropdown-section-${index}`} {...section} />
					))}
				</Stack>
			)}
		</Box>

	)
}

export const MenuSection = ({label, href, items, ...props}) => (
	<Box
		flex="1"
		{...props}
	>
		<Heading
			color="gray.500"
			fontSize=".7rem"
			textTransform="uppercase"
		>
			{href ? <Link to={href}>{label}</Link> : label }
		</Heading>
		<Stack as={List} mt={8} spacing={4}>
			{items.map((item, index) => (
				<ListItem
					lineHeight="shorter"
					color="gray.700"
					fontSize="14px"
					key={`item-${index}`}
				>
					<Link
						to={item.href}
					>
						{item.label}
					</Link>
				</ListItem>
			))}
		</Stack>
	</Box>
)

export default Menu

export const Dropdown = styled.div`

  position: absolute;
	bottom:0;
	right: 0.5rem;
	transform: translateY(calc(100% + 1.05rem));
	width: 675px;
	display: flex;

`


