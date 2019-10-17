import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Button from "../Button"

it("should render as default button", () => {
  const { container } = render(<Button />)
  expect(container.firstChild).toMatchSnapshot()
})
