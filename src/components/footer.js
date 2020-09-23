import { Box, Divider, Flex, Link, Text } from "@chakra-ui/core"
import React from "react"
import Container from "../gatsby-plugin-chakra-ui/components/container"
import { NavMenu } from "./nav"

const Footer = () => (
	<Box as="footer">
		<Container flexDirection="column" >
			<Divider />
			<Flex py={8} justify="space-between" align="center">
				<Text>
					Codevux © {new Date().getFullYear()}, Built with
					{` `}
					<Link textDecoration="underline" href="https://www.gatsbyjs.org">Gatsby</Link>
				</Text>
			</Flex>

		</Container>
	</Box>
)

export default Footer
