import { BandStore } from "@band-store/icons"
import { IconProps } from "@band-store/icons/dist/types"
import clsx from "clsx"
import React from "react"

type BandStoreIconProps = IconProps & {
  variant?: "base" | "subtle" | "muted"
}

export const ColoredBandStoreIcon = ({
  className,
  variant = "base",
  ...props
}: BandStoreIconProps) => {
  return (
    <BandStore
      {...props}
      className={clsx(
        className,
        variant === "base" && "[&_path]:fill-band-store-fg-base",
        variant === "subtle" && "[&_path]:fill-band-store-fg-subtle",
        variant === "muted" && "[&_path]:fill-band-store-fg-muted"
      )}
    />
  )
}
