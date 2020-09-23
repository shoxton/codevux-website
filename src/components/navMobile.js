import React from 'react'
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	DrawerCloseButton,
	Heading
 } from '@chakra-ui/core'
import { NavMenu } from './nav'

const NavMobile = (props) => {

  return (
		<Drawer size="xs" placement="right" {...props} >
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader>
					<DrawerCloseButton />
					<Heading as="h4" size="md">CODEVUX</Heading>
				</DrawerHeader>
				<DrawerBody>
					<NavMenu></NavMenu>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
  );
}

export default NavMobile
