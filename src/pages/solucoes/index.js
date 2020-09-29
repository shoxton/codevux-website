import React from 'react'
import SEO from '../../components/seo'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { ServiceList } from '../../components/service'
import Container from '../../gatsby-plugin-chakra-ui/components/container'
import { Section } from '../../components/utils'

export default (props) => (
	<Layout>
		<SEO
			title="Serviços e soluções"
			description="Combinando inovação e tecnologia para impulsionar o crescimento do seu negócio"
		/>
		<Intro
			headline="Serviços e soluções"
			intro="Combinando inovação e tecnologia para impulsionar o crescimento do seu negócio"
			btnText="Fale conosco"
			to="/contato"
			variant="outline"
			variantColor="gray.700"
			_hover={{bg: "gray.700", color: "white", textDecoration: "none"}}
		/>
		<Container>
			<Section pt="0!important" >
				<ServiceList />
			</Section>
		</Container>
	</Layout>
)

