import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as ChakraLink } from '@chakra-ui/core'

const Link = ({children, ...props}) => (
	<ChakraLink as={GatsbyLink} {...props}>
		{children}
	</ChakraLink>
)

export default Link
