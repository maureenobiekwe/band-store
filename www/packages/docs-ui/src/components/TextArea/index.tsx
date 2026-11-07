import React from "react"
import clsx from "clsx"

export type TextAreaProps = {
  className?: string
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className={clsx(
        "bg-band-store-bg-field shadow-border-base dark:shadow-border-base-dark",
        "rounded-docs_sm",
        "py-[6px] px-docs_0.5 text-medium font-base",
        "hover:bg-band-store-bg-field-hover",
        "focus:shadow-band-store-border-interactive-with-focus",
        "active:shadow-band-store-border-interactive-with-focus",
        "disabled:bg-band-store-bg-disabled",
        "disabled:border-band-store-border-base disabled:border disabled:shadow-none",
        "placeholder:text-band-store-fg-muted",
        "disabled:placeholder:text-band-store-fg-disabled",
        props.className
      )}
    />
  )
}
