import React from "react"
import clsx from "clsx"
import { ShadedBgIcon } from "../Icons/ShadedBg"

export type BadgeVariant =
  | "purple"
  | "orange"
  | "green"
  | "blue"
  | "red"
  | "neutral"
  | "code"

export type BadgeType = "default" | "shaded"

export type BadgeProps = {
  className?: string
  childrenWrapperClassName?: string
  variant: BadgeVariant
  badgeType?: BadgeType
} & React.HTMLAttributes<HTMLSpanElement>

export const Badge = ({
  className,
  variant,
  badgeType = "default",
  children,
  childrenWrapperClassName,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        "text-compact-x-small-plus text-center",
        badgeType === "default" &&
          "px-docs_0.25 py-0 rounded-docs_sm border border-solid",
        variant === "purple" &&
          "bg-band-store-tag-purple-bg text-band-store-tag-purple-text border-band-store-tag-purple-border",
        variant === "orange" &&
          "bg-band-store-tag-orange-bg text-band-store-tag-orange-text border-band-store-tag-orange-border",
        variant === "green" &&
          "bg-band-store-tag-green-bg text-band-store-tag-green-text border-band-store-tag-green-border",
        variant === "blue" &&
          "bg-band-store-tag-blue-bg text-band-store-tag-blue-text border-band-store-tag-blue-border",
        variant === "red" &&
          "bg-band-store-tag-red-bg text-band-store-tag-red-text border-band-store-tag-red-border",
        variant === "neutral" &&
          "bg-band-store-tag-neutral-bg text-band-store-tag-neutral-text border-band-store-tag-neutral-border",
        variant === "code" &&
          "bg-band-store-contrast-bg-subtle text-band-store-contrast-fg-secondary border-band-store-contrast-border-bot",
        badgeType === "shaded" && "px-[3px] !bg-transparent relative",
        // needed for tailwind utilities
        "badge",
        className
      )}
      {...props}
    >
      {badgeType === "shaded" && (
        <ShadedBgIcon
          variant={variant}
          className={clsx("absolute top-0 left-0 w-full h-full")}
        />
      )}
      <span
        className={clsx(
          badgeType === "shaded" && "relative z-[1]",
          childrenWrapperClassName
        )}
      >
        {children}
      </span>
    </span>
  )
}
