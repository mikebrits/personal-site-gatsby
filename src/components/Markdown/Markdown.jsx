import React from "react"
import "./Markdown.css"

export default ({ html }) => {
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}
