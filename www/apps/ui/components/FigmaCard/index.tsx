import React from "react"
import { Card } from "docs-ui"
import { basePathUrl } from "@/utils/base-path-url"

export const FigmaCard = () => {
  return (
    <Card
      title="BandStore UI"
      text="Colors, type, icons and components"
      href=""
      image={basePathUrl("/images/figma.png")}
      iconClassName="!p-0"
    />
  )
}
