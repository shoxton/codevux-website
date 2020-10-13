import React from 'react'
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerCloseButton,
	Heading,
	Box,
	Stack,
	Button,
	Icon
 } from '@chakra-ui/core'
import { NavBar } from './nav'
import Link from '../gatsby-plugin-chakra-ui/components/link';

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
				<Box
					color="gray.700"
				>
					<Box pb={4}>
						<Link fontWeight="bold" to="/desenvolvimento-web">Desenvolvimento Web <Icon name="arrow-forward" /> </Link>
						<Stack borderLeft="1px" borderLeftColor="gray.300" pl={4} py={4}>
							<Link to="/desenvolvimento-web/criar-site-institucional">Site institucional <Icon name="arrow-forward" /> </Link>
							<Link to="/desenvolvimento-web/criar-loja-virtual">Loja virtual <Icon name="arrow-forward" /> </Link>
							<Link to="/desenvolvimento-web/criar-blog">Blog <Icon name="arrow-forward" /> </Link>
						</Stack>
					</Box>
					<Box pb={4}>
						<Link fontWeight="bold" to="/integracao-de-sistemas">Integração de sistemas <Icon name="arrow-forward" /> </Link>
						<Stack borderLeft="1px" borderLeftColor="gray.300" pl={4} py={4}>
							<Link to="/integracao-de-sistemas/integrar-marketplaces">Marketplaces <Icon name="arrow-forward" /> </Link>
							<Link to="/integracao-de-sistemas/integrar-meios-de-pagamento">Meios de pagamento <Icon name="arrow-forward" /> </Link>
							<Link to="/integracao-de-sistemas/integrar-transportadoras">Transportadoras <Icon name="arrow-forward" /> </Link>
						</Stack>
					</Box>
					<Box pb={4}>
						<Link fontWeight="bold" to="/suporte">Suporte e consultoria <Icon name="arrow-forward" /> </Link>
					</Box>
					<Box pb={4}>
						<Link fontWeight="bold" to="/magento">Soluções em Magento <Icon name="arrow-forward" /> </Link>
					</Box>
				</Box>
				<Button
					to="/contato"
					as={Link}
					variantColor="teal"
					size="sm"
					_hover={{textDecoration: 'none', ...Button._hover}}
				>
					Fale conosco
				</Button>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
  );
}

export default NavMobile
