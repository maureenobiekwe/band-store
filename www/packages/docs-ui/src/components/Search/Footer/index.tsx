import clsx from "clsx"
import React from "react"
import { Kbd } from "@/components/Kbd"

export const SearchFooter = () => {
  return (
    <div
      className={clsx(
        "py-docs_0.75 hidden md:flex items-center justify-end px-docs_1",
        "border-band-store-border-base border-t",
        "bg-band-store-bg-field z-10"
      )}
    >
      <div className="flex items-center gap-docs_0.75">
        <div className="flex items-center gap-docs_0.5">
          <span
            className={clsx(
              "text-band-store-fg-subtle",
              "text-compact-x-small-plus"
            )}
          >
            Navigation
          </span>
          <span className="gap-[5px] flex">
            <Kbd
              className={clsx(
                "!bg-band-store-bg-field-component !border-band-store-border-strong",
                "!text-band-store-fg-subtle h-[18px] w-[18px] p-0"
              )}
            >
              ↑
            </Kbd>
            <Kbd
              className={clsx(
                "!bg-band-store-bg-field-component !border-band-store-border-strong",
                "!text-band-store-fg-subtle h-[18px] w-[18px] p-0"
              )}
            >
              ↓
            </Kbd>
          </span>
        </div>
        <div className={clsx("h-docs_0.75 w-px bg-band-store-border-strong")}></div>
        <div className="flex items-center gap-docs_0.5">
          <span
            className={clsx(
              "text-band-store-fg-subtle",
              "text-compact-x-small-plus"
            )}
          >
            Open Result
          </span>
          <Kbd
            className={clsx(
              "!bg-band-store-bg-field-component !border-band-store-border-strong",
              "!text-band-store-fg-subtle h-[18px] w-[18px] p-0"
            )}
          >
            ↵
          </Kbd>
        </div>
      </div>
    </div>
  )
}
