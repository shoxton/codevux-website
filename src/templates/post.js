import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Box, Heading } from '@chakra-ui/core'

const Post = ({ data: {
	post,
	nextPost,
	prevPost
} }) => {

	return (
		<Layout>

			<SEO title={post.title} />

			<Heading>{post.title}</Heading>
			<Box dangerouslySetInnerHTML={{__html: post.content}} />

		</Layout>
	)
}

export default Post

export const query = graphql`

	query post($id: String!, $nextPost: String, $prevPost: String) {
		post: wpPost(id: { eq: $id }) {
			title
			content
		}
		nextPost: wpPost(id: { eq: $nextPost }) {
			title
			uri
		}
		prevPost: wpPost(id: { eq: $prevPost }) {
			title
			uri
		}
	}

`
