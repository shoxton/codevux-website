import { Heading, Image, Box, Text, Stack } from "@chakra-ui/core"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "../components/utils"
import Container from "../gatsby-plugin-chakra-ui/components/container"
import Link from "../gatsby-plugin-chakra-ui/components/link"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Página não encontrada" />
		<Container>
			<Section>
				<Box
					textAlign="center"
					mx="auto"
				>
					<Image mx="auto" height="256px" src={'/images/404.svg'} />
					<Heading
						as="h2"
						fontSize="2xl"
						color="gray.700"
						mb={2}
					>
						Página não encontrada
					</Heading>
					<Stack
						spacing={8}
					>
						<Text
							color="gray.500"
						>
							Parece que esta página não existe ou foi removida.
						</Text>
						<Link
							to="/"
							fontWeight="bold"
							textDecoration="underline"
							color="teal.500"
						>
							Voltar à página inicial
						</Link>
					</Stack>
				</Box>
			</Section>
		</Container>
  </Layout>
)

export default NotFoundPage
