import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import { ServiceList } from "../components/service"
import Container from "../gatsby-plugin-chakra-ui/components/container"
import { Section, SectionHeading } from "../components/utils"
import { SolutionList } from '../components/solution'
import { Divider, Text, Stack, Heading } from '@chakra-ui/core'

export default (props) => (
	<Layout themeColor="dark">
		<SEO
			title="Codevux | Desenvolvimento Web"
		/>
		<Hero />
		<Container>
			<Section pt="0!important" mt="-12vh">
				<Stack mb={4} align="center" isInline>
						<Heading
							fontSize="md"
							as="p"
							fontWeight="medium"
							color="gray.400"
							textTransform="uppercase"
							letterSpacing=".25px"
						>
							Serviços
						</Heading>
						<Divider borderColor="gray.600" flex="1" />
				</Stack>
				<ServiceList />
			</Section>
			<Section pt="0!important">
				<Stack mb={4} align="center" isInline>
					<Heading
						fontSize="md"
						as="p"
						fontWeight="medium"
						color="gray.500"
						textTransform="uppercase"
						letterSpacing=".25px"
					>
						Soluções
					</Heading>
					<Divider borderColor="gray.300" flex="1" />
				</Stack>
				<SolutionList />
			</Section>
		</Container>
	</Layout>
)

