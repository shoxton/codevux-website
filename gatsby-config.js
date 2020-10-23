require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
		title: `Codevux`,
		longTitle: `Codevux | Desenvolvimento Web`,
    description: `Desenvolvimento de sites, lojas virtuais, blogs e sistemas personalizados. Desenvolvemos soluções que impactam você, seu negócio e seu cliente.`,
		image: '/images/default-image.png',
		siteUrl: 'https://codevux.com',
		author: `@codevux`,
		contact: {
			phone: `51999793218`,
			email: `codevux@gmail.com`,
		},
		social: {
			twitter: `https://twitter.com/codevux`,
			facebook: `https://facebook.com/codevux`,
			github: `https://github.com/codevux`
		}
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Codevux | Desenvolvimento Web`,
        short_name: `Codevux`,
        start_url: `/`,
        background_color: `#2D3748`,
        theme_color: `#2D3748`,
        display: `minimal-ui`,
        icon: `src/images/codevux-logo.png`, // This path is relative to the root of the site.
      },
    },
		"gatsby-plugin-chakra-ui",
		{
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`200`, `400`, `500`, `700`, `800`]
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
