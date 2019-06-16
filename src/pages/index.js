import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Video } from '../components/Video';
import { FireFlies } from '../components/FireFlies';

const Container = styled.section`
  padding: 30px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`

const IndexPage = () => {

  useEffect(() => {
    if (window.location.href.includes('netlify')) {
      window.location.href = "https://youwouldnotbelieveyoureyes.com/"
    }
  })

  return (
    <Layout>
      <SEO
        title="You Would Not Believe Your Eyes"
        description={`Fireflies but ALMOST every lyric is replaced with "You Would Not Believe Your Eyes" - Owl City`}/>
      <FireFlies />
      <Container>
        <Video />
        <h1>You would not believe your eyes...</h1>
      </Container>
    </Layout>
  )
}

export default IndexPage
