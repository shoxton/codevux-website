const { resolve } = require(`path`)
const path = require(`path`)
const tagTemplate = path.resolve("./src/templates/tag.js")

const GET_TAGS = `
	{
		allWpTag {
			nodes {
				uri
				id
			}
		}
	}
`
module.exports = async ( {actions, graphql }, options) => {

	const { createPage } = actions

	const fetchTags = async () => (

		/** Fetch pages using the GET_PAGES query and the variables passed in. */
		await graphql(GET_TAGS).then(({ data }) => {

			const {
				/** Extract the data from the GraphQL query results */
				allWpTag: {
					nodes
				}
			} = data

			 /** Once we're done, return all the pages */
			return nodes

		})
	)

	await fetchTags().then((tags) => {

		tags.map((tag, index) => {

			const { uri, id } = tag
			const path = `blog${uri}`

			createPage({
				path,
				component: tagTemplate,
				context: {id}
			})
		})

	})
}
