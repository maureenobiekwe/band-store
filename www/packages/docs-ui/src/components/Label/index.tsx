import clsx from "clsx"
import React from "react"

export type LabelProps = {
  className?: string
} & React.HTMLAttributes<HTMLSpanElement>

export const Label = ({ children, className }: LabelProps) => {
  return (
    <span
      className={clsx(
        "text-band-store-fg-base text-compact-medium-plus",
        className
      )}
    >
      {children}
    </span>
  )
}
