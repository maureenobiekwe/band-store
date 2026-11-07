import React from "react"
import { beforeEach, describe, expect, test, vi } from "vitest"
import { render } from "@testing-library/react"

// mock components
vi.mock("@/components/CopyButton", () => ({
  CopyButton: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="copy-button">{children}</div>
  ),
}))

import { InlineCode } from "../../InlineCode"

describe("rendering", () => {
  test("renders default variant", () => {
    const { container } = render(<InlineCode>Test</InlineCode>)
    const code = container.querySelector("code")
    expect(code).toBeInTheDocument()
    expect(code).toHaveTextContent("Test")
    expect(code).toHaveClass(
      "bg-band-store-tag-neutral-bg group-hover:bg-band-store-tag-neutral-bg-hover group-active:bg-band-store-bg-subtle-pressed group-focus:bg-band-store-bg-subtle-pressed border-band-store-tag-neutral-border"
    )
  })

  test("renders grey-bg variant", () => {
    const { container } = render(
      <InlineCode variant="grey-bg">Test</InlineCode>
    )
    const code = container.querySelector("code")
    expect(code).toBeInTheDocument()
    expect(code).toHaveTextContent("Test")
    expect(code).toHaveClass(
      "bg-band-store-bg-switch-off group-hover:bg-band-store-bg-switch-off-hover group-active:bg-band-store-bg-switch-off-hover group-focus:bg-band-store-switch-off-hover border-band-store-border-strong"
    )
  })
})
