import React from "react"

import type { LinkProps as NextLinkProps } from "next/link"
import Link from "next/link"
import clsx from "clsx"

type LinkButtonProps = NextLinkProps & {
  variant?: "base" | "interactive" | "subtle" | "muted"
  className?: string
} & React.AllHTMLAttributes<HTMLAnchorElement>

export const LinkButton = ({
  variant = "base",
  className,
  ...linkProps
}: LinkButtonProps) => {
  return (
    <Link
      {...linkProps}
      className={clsx(
        className,
        "inline-flex justify-center items-center",
        "gap-docs_0.25 rounded-docs_xs",
        "text-compact-small-plus disabled:text-band-store-fg-disabled",
        "focus:shadow-borders-focus no-underline",
        variant === "base" && [
          "text-band-store-fg-base hover:text-band-store-fg-subtle",
          "focus:text-band-store-fg-base",
        ],
        variant === "interactive" && [
          "text-band-store-fg-interactive hover:text-band-store-interactive-hover",
          "focus:text-band-store-fg-interactive",
        ],
        variant === "subtle" && [
          "text-band-store-fg-subtle hover:text-band-store-fg-base",
          "focus:text-band-store-fg-subtle",
        ],
        variant === "muted" && [
          "text-band-store-fg-muted hover:text-band-store-fg-subtle",
          "focus:text-band-store-fg-muted",
        ]
      )}
    />
  )
}
