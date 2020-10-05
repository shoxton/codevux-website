import { Flex } from '@chakra-ui/core'
import React from 'react'

const Container = ({children, ...props}) => (
	<Flex
		w="full"
		flexWrap="wrap"
		maxWidth={{sm: 'lg', md: 'xl', lg: '3xl', xl: '5xl'}}
		px={[4,2]}
		mx="auto"
		{...props}
	>
		{children}
	</Flex>
)

export default Container
