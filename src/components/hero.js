import React from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/core'
import Container from '../gatsby-plugin-chakra-ui/components/container'
import Intro from '../components/intro'
import { Link } from 'gatsby'

const Hero = () => {

	return (
		<Intro
			headline="Inovação e tecnologia trabalhando a seu favor"
			intro="Desenvolvemos soluções que impactam você, seu negócio e seu cliente"
			btnText="Descubra soluções"
			to="/solucoes"
			themeColor="dark"
		/>
)
}

export default Hero
