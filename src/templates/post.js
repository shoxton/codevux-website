import React from 'react'
import { graphql } from "gatsby"
import BlogPost from '../components/blog-post'

export default ({data}) => <BlogPost data={data} />

export const query = graphql`

	query post($id: String!, $nextPost: String, $prevPost: String) {
		post: wpPost(id: { eq: $id }) {
			title
			content
			featuredImage {
        node {
          localFile {
            ...FeaturedImage
          }
        }
      }
			author {
				node {
					name
				}
			}
			fromNowDate: dateGmt(fromNow: true, locale: "pt-BR")
    	formattedDate: dateGmt(locale: "pt-BR", formatString: "DD/MM/YYYY")
			tags {
				nodes {
					name
					id
				}
			}
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
