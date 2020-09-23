import { Box, Flex, Stack, Heading, Button, useDisclosure } from '@chakra-ui/core'
import React from 'react'
import { useStaticQuery } from 'gatsby'
import Container from '../gatsby-plugin-chakra-ui/components/container'
import Link from '../gatsby-plugin-chakra-ui/components/link'
import NavMobile from './navMobile'

// using https://chakra-ui.com/drawer

const Nav = ({location, childRef, ...props}) => {

	const { isOpen, onOpen, onClose } = useDisclosure();

	const data = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

  return (
    <Box
			ref={childRef}
			as="nav"
			width="100%"
			py={4}
			bg="white"
			pos="fixed"
			zIndex="sticky"
    >
			<Container justify="space-between" align="center">
				<Heading textTransform="uppercase" as={Link} to="/" size="lg">
					{data.site.siteMetadata.title}
				</Heading>

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
		<Button variant="solid" variantColor="teal">
			Fale conosco
		</Button>
	</Stack>
)

export default Nav
