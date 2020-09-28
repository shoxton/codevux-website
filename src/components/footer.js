import { Box, Divider, Flex, Link, Text } from "@chakra-ui/core"
import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Container from "../gatsby-plugin-chakra-ui/components/container"

const Footer = () => (
	<Box as="footer">
		<Container flexDirection="column" >
			<Divider />
			<Flex py={8} justify="space-between" align="center">
				<StaticQuery query={query} render={
					data => <Text>{`${data.site.siteMetadata.longTitle} © ${new Date().getFullYear()}`}</Text>
				} />
			</Flex>

		</Container>
	</Box>
)

export const query = graphql`
	query FooterQuery {
		site {
			siteMetadata {
				longTitle
			}
		}
	}
`

export default Footer
