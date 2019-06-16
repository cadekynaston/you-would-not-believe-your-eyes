import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';

import { GlobalStyles } from '../components/GlobalStyles';

const Footer = styled.footer`
  text-align: center;
`

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
        <Footer>
          <a href="https://github.com/cadekynaston/you-would-not-believe-your-eyes" target="_blank">View on Github</a>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
