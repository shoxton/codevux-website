import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import { ServiceList } from "../components/service"
import Container from "../gatsby-plugin-chakra-ui/components/container"
import { Section, SectionHeading } from "../components/utils"
import { SolutionList } from '../components/solution'
import { Heading } from '@chakra-ui/core'

export default (props) => (
	<Layout themeColor="dark">
		<SEO
			title="Codevux | Desenvolvimento Web"
		/>
		<Hero />
		<Container>
			<Section pt="0!important" mt="-8vh">
				<ServiceList />
			</Section>
			<Section pt="0!important" mt="-8vh">
				<SolutionList />
			</Section>
		</Container>
	</Layout>
)

