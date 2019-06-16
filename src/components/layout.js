import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { GlobalStyles } from '../components/GlobalStyles';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyles />
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
