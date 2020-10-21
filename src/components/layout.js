/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"
import "./layout.css"
import Footer from "./footer"
import Nav from "./nav"
import { Box } from "@chakra-ui/core"

const Layout = ({ children, themeColor="light" }) => {

	const { pathname } = useLocation()
	const blogPath = "/blog"
	const isBlog = pathname.includes(blogPath)

  return (
    <>
			<Nav themeColor={themeColor} sticky={!isBlog} />
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
