const { resolve } = require(`path`)
const path = require(`path`)
const postTemplate = path.resolve("./src/templates/post.js")

const GET_POSTS = `
	{
		allWpPost {
			nodes {
				uri
				id
			}
		}
	}
`
module.exports = async ( {actions, graphql }, options) => {

	const { createPage } = actions

	const fetchPosts = async () => (

		/** Fetch pages using the GET_PAGES query and the variables passed in. */
		await graphql(GET_POSTS).then(({ data }) => {

			const {
				/** Extract the data from the GraphQL query results */
				allWpPost: {
					nodes
				}
			} = data

			 /** Once we're done, return all the pages */
			return nodes

		})
	)

	await fetchPosts().then((posts) => {

		posts.map((post, index) => {

			const { uri, id } = post
			const path = `blog${uri}`

			createPage({
				path,
				component: postTemplate,
				context: {
					id,
					nextPost: (post[index + 1] || {}).id,
          			prevPost: (post[index - 1] || {}).id,
				 }
			})
		})

	})
}
