import { Flex, Box } from "@chakra-ui/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "../gatsby-plugin-chakra-ui/components/container"

const Header = ({ siteTitle }) => (
  <Box as="nav" bg="primary" py={4}>
    <Container

    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
