import React from "react";
import ReactMarkdown from "react-markdown";
import style from "./project.module.css";

/**
 * Project-specific Markdown renderer extracting the component map from page.jsx.
 * Pass raw markdown string via `content` prop.
 */
export default function MarkdownRenderer({ content }) {
  if (!content) return null;
  return (
    <ReactMarkdown
      className={style.markdown}
      components={{
        a: ({ node, ...props }) => {
          const href = props.href || "";
          const isExternal = /^https?:\/\//.test(href);
          return (
            <a
              {...props}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={style.mdLink}
            />
          );
        },
        code: ({ inline, className, children, ...props }) => {
          if (inline) {
            return (
              <code className={style.inlineCode} {...props}>
                {children}
              </code>
            );
          }
          return (
            <pre className={style.codeBlock} {...props}>
              <code>{children}</code>
            </pre>
          );
        },
        blockquote: ({ node, ...props }) => (
          <blockquote className={style.blockquote} {...props} />
        ),
        table: ({ node, ...props }) => (
          <div className={style.tableWrapper}>
            <table {...props} />
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
