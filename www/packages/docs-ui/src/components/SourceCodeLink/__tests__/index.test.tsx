import { describe, expect, test } from "vitest"
import { render } from "@testing-library/react"
import { SourceCodeLink } from "../index"

describe("rendering", () => {
  test("does not render a source link until a repository is configured", () => {
    const { container } = render(<SourceCodeLink link="/source" />)

    expect(container).toBeEmptyDOMElement()
  })
})
