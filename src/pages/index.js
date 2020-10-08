import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import { ServiceList } from "../components/service"
import Container from "../gatsby-plugin-chakra-ui/components/container"
import { Section, SectionHeading } from "../components/utils"

export default (props) => (
	<Layout themeColor="dark">
		<SEO
			title="Codevux | Desenvolvimento Web"
		/>
		<Hero />
		<Container>
			<Section pt="0!important" mt={{base: '-32px', lg: '-64px'}}>
				{/* <SectionHeading
					heading="Serviços e soluções"
					text="Nosso objetivo é agregar valor"
				/> */}
				<ServiceList id="index-services" />
			</Section>
		</Container>
	</Layout>
)

