import React from 'react'
import GithubSlugger from 'github-slugger'
import Layout from '../layout'
import Container from '../../gatsby-plugin-chakra-ui/components/container'
import SEO from '../seo'
import Header from './header'
import Content, { ContentNav } from './content'
import Comments from './comments'
import Footer from './footer'
import { Flex, Box, Grid } from '@chakra-ui/core'

const BlogPost = ({data}) => {

	const { title, excerpt, content, featuredImage } = data.post

	// const toSlug = GithubSlugger.slug

	// // set an id to all h2 tags
	// const navigatedContent = content
	// 	.replace(
	// 		/<h2>([\s\S]*?)<\/h2>/g,
	// 		(match, text) =>
	// 			`<h2 id="${toSlug(text)}">${text}</h2>`
	// )

	return(
		<Layout>
			<SEO
				title={title}
				type="article"
				description={excerpt}
				image={featuredImage?.node?.localFile?.childImageSharp?.fluid}
			/>
			<Container pt="8vh" position="relative">
				<Grid templateColumns={{md: '1fr', lg: '180px 1fr'}} >
					<ContentNav content={content} />
					<Box>
						<Header header={data.post} />
						<Content content={content} />
						<Footer />
						<Comments />
					</Box>
				</Grid>
			</Container>
		</Layout>
	)

}

export default BlogPost
