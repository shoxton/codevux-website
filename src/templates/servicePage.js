import React from 'react'
import SEO from "../components/seo"
import { Section } from '../components/utils'
import Intro from '../components/intro'
import Container from "../gatsby-plugin-chakra-ui/components/container"
import { ProductList } from '../components/product'
import Layout from '../components/layout'


const ServicePage = ({
	data: {
		contentfulService: {
			slug,
			title,
			heroImage,
			headline,
			description: {description},
			products
		}
	},
	...props
}) => (
	<Layout themeColor="dark" >
		<SEO
			title={title}
			description={description}
		/>
		<Intro
			headline={headline}
			intro={description}
			label={title}
			themeColor="dark"
			backgroundImage={heroImage?.fluid.src}
			btnText="Fale conosco"
			columns="2fr 1fr"
			to="/contato"
		>
		</Intro>
		<Container>
			<Section pt="0!important" mt="-8vh">
				<ProductList products={products} context={slug} />
			</Section>
		</Container>
	</Layout>
)

export default ServicePage

