import React from "react"
import clsx from "clsx"
import { FeatureTableFields, Block } from "../../../utils/types"
import { getBlockLines } from "../../../utils/pricing"
import { BorderedIcon, H3, MarkdownContent, MDXComponents } from "docs-ui"
import slugify from "slugify"
import {
  CodePullRequest,
  CurrencyDollar,
  EnvelopeContent,
  ServerStack,
  Shopping,
  Users,
  Window,
  Microchip,
  Robot,
  Bolt,
  MagnifyingGlass,
} from "@band-store/icons"
import { config } from "../../../config"

const P = MDXComponents.p

interface FeatureSectionsProps {
  featureSections: FeatureTableFields["featureSections"]
  columnCount: number
  columns: string[]
}

const featureIcons: Record<string, React.FC> = {
  "Commerce features": Shopping,
  Agents: Robot,
  Infrastructure: CodePullRequest,
  Storefronts: Window,
  "High Reliability": ServerStack,
  "Enterprise License": Users,
  "BandStore Cache": Bolt,
  Search: MagnifyingGlass,
  "BandStore Emails": EnvelopeContent,
  "Compute & Resources": Microchip,
  "Organization & Billing": CurrencyDollar,
}

const renderBlockContent = (blocks: Block[]) =>
  getBlockLines(blocks, config.baseUrl).join("  \n").replaceAll("-", "\\-")

const FeatureSections: React.FC<FeatureSectionsProps> = ({
  featureSections,
  columnCount,
  columns,
}) => {
  if (!featureSections || featureSections.length === 0) {
    return null
  }

  // Calculate consistent column widths
  // Use fractional units to ensure all grids have matching column sizes
  const featureNameFraction = 2 // Feature name gets 2 units
  const featureColumnFraction = `minmax(0, 1fr)` // Each feature column gets 1 unit
  const gridTemplate = `${featureNameFraction}fr repeat(${columnCount}, ${featureColumnFraction})`

  return (
    <div className="w-full flex flex-col rounded shadow-elevation-card-rest dark:shadow-elevation-card-rest-dark overflow-hidden">
      {/* Header */}
      <div
        className="w-full grid gap-0 rounded-t"
        style={{
          gridTemplateColumns: gridTemplate,
        }}
      >
        {/* Features label column */}
        <div className="flex items-center justify-start p-0.5 sm:px-1.5 sm:py-1 border-solid border-r border-band-store-border-base">
          <p className="txt-medium sm:txt-large text-band-store-fg-subtle">
            Features
          </p>
        </div>

        {/* Column headers */}
        {columns.map((column, index) => (
          <div
            key={index}
            className={clsx(
              "flex items-center justify-center p-0.25 sm:p-1 bg-band-store-bg-base",
              index !== columns.length - 1 &&
                "border-solid border-r border-band-store-border-base"
            )}
          >
            <p className="txt-medium sm:txt-large text-band-store-fg-base text-left w-full">
              {column}
            </p>
          </div>
        ))}
      </div>
      {/* Feature Sections */}
      {featureSections.map((section) => (
        <div key={section._key} className="w-full">
          {/* Section Header */}
          <div className="w-full p-1.5 bg-band-store-bg-component flex gap-1 border-band-store-border-base border-y items-center">
            {featureIcons[section.header.subtitle] && (
              <BorderedIcon
                IconComponent={featureIcons[section.header.subtitle]}
                wrapperClassName="p-[7.5px] bg-band-store-bg-component rounded-[5px]"
              />
            )}
            <div>
              <H3
                id={slugify(section.header.subtitle, { lower: true })}
                className="!my-0"
              >
                {section.header.subtitle}
              </H3>
              {/* @ts-expect-error this is a React component */}
              <P className="text-band-store-fg-subtle">{section.header.title}</P>
            </div>
          </div>

          {/* Section Rows */}
          <div className="w-full">
            {section.rows.map((row, index) => (
              <React.Fragment key={row._key}>
                <div
                  className={clsx(
                    "w-full grid gap-0 border-solid border-band-store-border-base",
                    index !== section.rows.length - 1 && "border-b"
                  )}
                  style={{
                    gridTemplateColumns: gridTemplate,
                  }}
                >
                  {/* Feature name column */}
                  <div className="p-0.25 sm:p-1 flex items-center justify-start border-solid border-r border-band-store-border-base">
                    <p className="txt-medium-plus text-band-store-fg-base">
                      <MarkdownContent
                        allowedElements={["br", "a"]}
                        unwrapDisallowed
                      >
                        {renderBlockContent(row.column1)}
                      </MarkdownContent>
                    </p>
                  </div>

                  {/* Feature value columns */}
                  {Array.from({ length: columnCount }, (_, colIndex) => {
                    const columnKey = `column${
                      colIndex + 2
                    }` as keyof typeof row
                    const columnData = row[columnKey] as Block[]

                    return (
                      <div
                        key={colIndex}
                        className={clsx(
                          "p-0.25 sm:p-1 flex items-center justify-center",
                          colIndex !== columnCount - 1 &&
                            "border-solid border-r border-band-store-border-base"
                        )}
                      >
                        <p className="txt-medium text-band-store-fg-base text-left w-full">
                          <MarkdownContent
                            allowedElements={["br", "a"]}
                            unwrapDisallowed
                          >
                            {renderBlockContent(columnData)}
                          </MarkdownContent>
                        </p>
                      </div>
                    )
                  })}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureSections
