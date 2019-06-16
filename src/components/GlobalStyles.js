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
      }

      .video-iframe {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .canvas {
        position: absolute;
        z-index: -1;
      }
    `
    }
  />
)

