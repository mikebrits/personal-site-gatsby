import React from "react"
import { graphql } from "gatsby"
import {Page} from "../components/Page"
import Markdown from "../components/Markdown/Markdown"

export default function Bounty({ data }) {
  const { html } = data.markdownRemark
  const {
    title,
  } = data.markdownRemark.frontmatter
  return (
    <Page>
      <h1>{title}</h1>
      <Markdown html={html} />
    </Page>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`
