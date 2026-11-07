"use client"

import React from "react"
import clsx from "clsx"
import { CopyButton } from "@/components/CopyButton"

export type InlineCodeProps = React.ComponentProps<"code"> & {
  variant?: "default" | "grey-bg"
}

export const InlineCode = ({
  variant = "default",
  ...props
}: InlineCodeProps) => {
  return (
    <CopyButton
      text={props.children as string}
      buttonClassName={clsx(
        "bg-transparent border-0 p-0 inline text-band-store-fg-subtle group",
        "font-monospace"
      )}
    >
      <code
        {...props}
        className={clsx(
          "text-band-store-tag-neutral-text border whitespace-break-spaces",
          "font-monospace text-code-label rounded-docs_sm py-0 px-[5px]",
          variant === "default" && [
            "bg-band-store-tag-neutral-bg group-hover:bg-band-store-tag-neutral-bg-hover",
            "group-active:bg-band-store-bg-subtle-pressed group-focus:bg-band-store-bg-subtle-pressed",
            "border-band-store-tag-neutral-border",
          ],
          variant === "grey-bg" && [
            "bg-band-store-bg-switch-off group-hover:bg-band-store-bg-switch-off-hover",
            "group-active:bg-band-store-bg-switch-off-hover group-focus:bg-band-store-switch-off-hover",
            "border-band-store-border-strong",
          ],
          props.className
        )}
      />
    </CopyButton>
  )
}
