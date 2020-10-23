/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 * https://www.gatsbyjs.com/docs/add-seo-component/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

function SEO({ title, description, image, type, lang, meta }) {

	const { pathname } = useLocation()

	const isRootPath = pathname === '/'

  const { site: {
		siteMetadata: {
			defaultTitle,
			longTitle,
			defaultDescription,
			defaultImage,
			siteUrl,
			author
		}
	} } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
						defaultTitle: title
						longTitle
						defaultDescription: description
						defaultImage: image
						siteUrl
            author
          }
        }
      }
    `
  )
	const titleTemplate = !isRootPath ? `%s | ${title}` : longTitle
	const metaDescription = description || defaultDescription
	const ogImage = `${siteUrl}${image || defaultImage}`
	const ogUrl = `${siteUrl}${pathname}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: ogUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
	lang: `pt-BR`,
	type: `website`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  type: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
