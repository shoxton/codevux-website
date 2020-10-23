require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
		siteUrl: `https://codevux.com`,
		title: `Codevux`,
		longTitle: `Codevux | Desenvolvimento Web`,
    description: `Desenvolvimento de sites, lojas virtuais, blogs e sistemas personalizados. Desenvolvemos soluções que impactam você, seu negócio e seu cliente.`,
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
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: [
					`/dev-404-page`,
					`/404`,
					`/404.html`,
				]
			}
		}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
