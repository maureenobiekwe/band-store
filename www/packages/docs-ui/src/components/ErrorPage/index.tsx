import React from "react"
import { ErrorPageIcon } from "./Icon"
import Link from "next/link"
import { Button } from "../Button"

export const ErrorPage = () => {
  return (
    <div className="w-full h-full bg-band-store-bg-subtle flex items-center justify-center">
      <div className="flex gap-docs_1.5 flex-col items-center justify-center w-fit max-w-lg">
        <ErrorPageIcon />
        <div className="flex flex-col items-center gap-docs_0.5">
          <h1 className="text-band-store-fg-base text-2xl">
            Oops! Something went wrong.
          </h1>
          <span className="text-band-store-fg-subtle txt-large-plus text-pretty text-center">
            This page couldn't be loaded. Please try again later.
          </span>
        </div>
        <div className="flex items-center justify-center gap-docs_0.75">
          <Link href="/" passHref>
            <Button variant="primary">Go to homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
