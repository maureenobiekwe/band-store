import React from "react"
import { describe, expect, test, vi } from "vitest"
import { render } from "@testing-library/react"

vi.mock("next/link", () => ({
  default: (props: {
    children: React.ReactNode
    href: string
    className?: string
    [key: string]: unknown
  }) => <a {...props} />,
}))

import { LinkButton } from "../../LinkButton"

describe("rendering", () => {
  test("renders link button with href", () => {
    const { container } = render(
      <LinkButton href="/test">Test Button</LinkButton>
    )
    const link = container.querySelector("a")
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test")
    expect(link).toHaveTextContent("Test Button")
  })

  test("renders with base variant by default", () => {
    const { container } = render(
      <LinkButton href="/test">Test Button</LinkButton>
    )
    const link = container.querySelector("a")
    expect(link).toHaveClass(
      "text-band-store-fg-base hover:text-band-store-fg-subtle focus:text-band-store-fg-base"
    )
  })

  test("renders with interactive variant", () => {
    const { container } = render(
      <LinkButton href="/test" variant="interactive">
        Test Button
      </LinkButton>
    )
    const link = container.querySelector("a")
    expect(link).toHaveClass(
      "text-band-store-fg-interactive hover:text-band-store-interactive-hover focus:text-band-store-fg-interactive"
    )
  })

  test("renders with subtle variant", () => {
    const { container } = render(
      <LinkButton href="/test" variant="subtle">
        Test Button
      </LinkButton>
    )
    const link = container.querySelector("a")
    expect(link).toHaveClass(
      "text-band-store-fg-subtle hover:text-band-store-fg-base focus:text-band-store-fg-subtle"
    )
  })

  test("renders with muted variant", () => {
    const { container } = render(
      <LinkButton href="/test" variant="muted">
        Test Button
      </LinkButton>
    )
    const link = container.querySelector("a")
    expect(link).toHaveClass(
      "text-band-store-fg-muted hover:text-band-store-fg-subtle focus:text-band-store-fg-muted"
    )
  })

  test("applies custom className", () => {
    const { container } = render(
      <LinkButton href="/test" className="custom-class">
        Test Button
      </LinkButton>
    )
    const link = container.querySelector("a")
    expect(link).toHaveClass("custom-class")
  })

  test("passes through other props", () => {
    const { container } = render(
      <LinkButton href="/test" target="_blank" rel="noopener">
        Test Button
      </LinkButton>
    )
    const link = container.querySelector("a")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener")
  })
})
