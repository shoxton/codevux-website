/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Footer from "./footer"
import Nav from "./nav"
import { Box } from "@chakra-ui/core"

const Layout = ({ location, children, themeColor="light" }) => {

	// calculates nav height to define body offset
	const navRef = useRef(null)
	const [navHeight, setNavHeight] = useState()

	const getNavHeight = () => navRef.current.getBoundingClientRect().height

	useEffect(() => {
		setNavHeight(getNavHeight())
	}, [navRef])

  return (
    <>
			<Nav themeColor={themeColor} childRef={navRef} location={location} />
			<Box
				as="main"
				// pt={`${navHeight}px`}
			>
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
