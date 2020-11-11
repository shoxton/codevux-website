/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Footer from "./footer"
import Nav from "./nav"
import { Box } from "@chakra-ui/core"

const Layout = ({ location, children, themeColor="light" }) => {

  return (
    <>
			<Nav themeColor={themeColor} location={location} />
			<Box as="main">
				{children}
			</Box>
			<Footer />
    </>
  )
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
