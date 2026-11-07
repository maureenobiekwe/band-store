import clsx from "clsx"
import Link from "next/link"
import React from "react"

type HeadlineTagsProps = {
  tags: (
    | string
    | {
        text: string
        link: string
      }
  )[]
  className?: string
}

export const HeadlineTags = ({ tags, className }: HeadlineTagsProps) => {
  return (
    <div
      className={clsx(
        "flex gap-docs_0.25 flex-wrap justify-center items-center",
        "text-code-paragraph-xsmall-plus font-monospace uppercase",
        className
      )}
    >
      {tags.map((tag, index) => {
        return (
          <React.Fragment key={index}>
            {typeof tag === "string" ? (
              <span className=" text-band-store-fg-subtle">[{tag}]</span>
            ) : (
              <Link
                href={tag.link}
                className="text-band-store-fg-interactive hover:text-band-store-fg-interactive-hover"
              >
                [{tag.text}]
              </Link>
            )}
            {index !== tags.length - 1 && (
              <span className="text-band-store-fg-subtle">·</span>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
