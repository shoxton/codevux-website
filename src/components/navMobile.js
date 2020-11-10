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
				<DrawerBody
					overflowY="auto"
				>
				<Box
					color="gray.700"
				>
					<Box pb={4}>
						<Link fontWeight="bold" to="/desenvolvimento-web">Desenvolvimento Web </Link>
						<Stack borderLeft="1px" borderLeftColor="gray.300" pl={4} py={4}>
							<Link to="/desenvolvimento-web/criar-site">Criar Site </Link>
							<Link to="/desenvolvimento-web/criar-loja-virtual">Criar Loja virtual </Link>
							<Link to="/desenvolvimento-web/criar-blog">Criar Blog </Link>
						</Stack>
					</Box>
					<Box pb={4}>
						<Link fontWeight="bold" to="/desenvolvimento-sob-demanda">Desenvolvimento sob demanda</Link>
						<Stack borderLeft="1px" borderLeftColor="gray.300" pl={4} py={4}>
							<Link to="/desenvolvimento-sob-demanda/sistema-personalizado">Criar Sistema Personalizado </Link>
							<Link to="/desenvolvimento-sob-demanda/integrar-marketplaces">Integrar Marketplaces </Link>
							<Link to="/desenvolvimento-sob-demanda/integrar-meios-de-pagamento">Integrar Meios de pagamento </Link>
							<Link to="/desenvolvimento-sob-demanda/integrar-transportadoras">Integrar Transportadoras </Link>
						</Stack>
					</Box>
					<Box pb={4}>
						<Link fontWeight="bold" to="/suporte">Suporte</Link>
						<Stack borderLeft="1px" borderLeftColor="gray.300" pl={4} py={4}>
							<Link to="/suporte/gerenciamento-de-infraestrutura">Gerenciamento de infraestrutura</Link>
							<Link to="/suporte/consultoria">Consultoria </Link>
						</Stack>
					</Box>
					<Box pb={4}>
						<Link fontWeight="bold" to="/solucoes/magento">Soluções em Magento </Link>
					</Box>
					<Box pb={4}>
						<Link fontWeight="bold" to="/solucoes/wordpress">Soluções em Wordpress</Link>
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
