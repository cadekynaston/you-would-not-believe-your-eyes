import React from 'react'
import { Global, css } from '@emotion/core'

export const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      body {
        font-family: 'Indie Flower', cursive;
        color: #ffffff;
      }
      body {
        background-color: #090C08;
      }

      h1 {
        font-size: 50px;
        text-align: center;

        @media screen and (max-width: 599px) {
          font-size: 30px
        }
      }

      .video-iframe {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 800px;
        max-height: 500px;

        @media screen and (min-width: 1000px) {
          width: 800px;
          height: 450px;
        }

        @media screen and (max-width: 1000px) and (min-width: 600px) {
          width: 580px;
          height: 326px;
        }

        @media screen and (max-width: 599px) {
          width: 300px;
          height: 169px;
        }


      }

      .canvas {
        position: absolute;
        z-index: -1;
      }
    `
    }
  />
)

