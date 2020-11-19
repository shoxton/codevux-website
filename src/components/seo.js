import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
const SEO = ({ title, description, image, article, lang }) => {
	const { pathname } = useLocation()
	const rootPath = pathname === '/'
  const { site } = useStaticQuery(query)
  const {
		defaultTitle,
		longTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata
  const seo = {
		title: title || defaultTitle,
		titleTemplate: rootPath ? longTitle : titleTemplate,
    description: description || defaultDescription,
    image: image || `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate} htmlAttributes={{lang}}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
	article: PropTypes.bool,
	lang: PropTypes.string
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
	article: false,
	lang: 'pt-BR'
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
				defaultTitle: title
				longTitle
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`
