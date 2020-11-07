import { Box, Icon, Stack } from '@chakra-ui/core'
import React from 'react'
import Link from '../gatsby-plugin-chakra-ui/components/link'

export const ServiceNav = ({service, current}) => {



	return(

		<Box
			position="fixed"
			top="50%"
			transform="translateY(-50%)"
			right="48px"
			textAlign="right"
			color="gray.700"
			display={{base: 'none', lg: 'block'}}
			maxWidth="200px"
			backgroundColor="#fff"
			p={4}
			borderRadius="md"
		>
			<Stack
				fontSize="sm"
			>
				{service.products.map(product => (
					<Link
						to={`/${service.slug}/${product.slug}`}
						fontWeight={current === product.slug && 'bold'}
						fontSize={current !== product.slug && 'xs'}
					>
						{product.title}
						{current !== product.slug && <Icon ml={2} name="minus" size={2} />}
					</Link>
				))}
			</Stack>
		</Box>

	)

}

export default ServiceNav
