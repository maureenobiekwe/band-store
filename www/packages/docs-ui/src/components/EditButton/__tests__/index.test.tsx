import React from "react"
import { describe, expect, test, vi } from "vitest"
import { render } from "@testing-library/react"

// mock components
vi.mock("@/components/EditDate", () => ({
  EditDate: ({ date }: { date: string }) => (
    <div data-testid="edit-date">{date}</div>
  ),
}))

import { EditButton } from "../../EditButton"

describe("render", () => {
  test("does not render a source edit link", () => {
    const { container } = render(<EditButton filePath="/test.md" />)
    const editButton = container.querySelector("[data-testid='edit-button']")
    expect(editButton).not.toBeInTheDocument()
  })

  test("renders edit button with edit date", () => {
    const { container } = render(
      <EditButton filePath="/test.md" editDate="2021-01-01" />
    )
    expect(container).toBeInTheDocument()
    const editDate = container.querySelector("[data-testid='edit-date']")
    expect(editDate).toBeInTheDocument()
    expect(editDate).toHaveTextContent("2021-01-01")
  })
})
