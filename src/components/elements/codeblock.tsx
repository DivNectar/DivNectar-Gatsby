import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styled, { withTheme } from "styled-components"

interface CodeBlockProps {
  children: React.Component
  className: string
  fileName?: string
}

export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const language = className.replace(/language-/, "")

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "20px",
            borderRadius: "4px",
            // maxWidth: "70%",
            margin: "20px auto",
            boxShadow: `${props => props.theme.boxShadow.elevation2}`,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default withTheme(CodeBlock)
