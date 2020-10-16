/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createPosts = require("./src/create/createPosts")

exports.createPages = async (props) => {
  await createPosts(props)
 }
