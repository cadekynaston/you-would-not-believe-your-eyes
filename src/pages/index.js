import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Video } from '../components/Video';
import { FireFlies } from '../components/FireFlies';

const Container = styled.section`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="You Would Not Believe Your Eyes" />
    <FireFlies />
    <Container>
      <h1>You would not believe your eyes...</h1>
      <Video />
    </Container>
  </Layout>
)

export default IndexPage
