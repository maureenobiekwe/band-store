  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import BandStore from "../band-store"

  describe("BandStore", () => {
    it("should render the icon without errors", async () => {
      render(<BandStore data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })