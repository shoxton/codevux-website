import { Box, Stack, Heading, Button, useDisclosure, Icon, Flex } from '@chakra-ui/core'
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
			color="gray.700"
			borderBottom="1px"
			borderColor="gray.200"
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
		<Button variant="solid" variantColor="teal">
			Fale conosco
		</Button>
	</Stack>
)

export default Nav
