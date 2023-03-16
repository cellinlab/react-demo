import { render, screen } from "@testing-library/react"

import { Checklist } from "./Checklist"

test("should render correct list items when data sepcified", () => {
  render(
    <Checklist
      data={[{ id: 1, name: "item 1", role: "Role 1" }]}
      id="id"
      primary="name"
      secondary="role"
    />
  )
  expect(screen.getByText("item 1")).toBeInTheDocument()
  expect(screen.getByText("Role 1")).toBeInTheDocument()
})

test("should render correct list items when renderItem sepcified", () => {
  render(
    <Checklist
      data={[{ id: 1, name: "item 1", role: "Role 1" }]}
      id="id"
      primary="name"
      secondary="role"
      renderItem={(item) => (
        <li key={item.id}>
          {item.name} - {item.role}
        </li>
      )}
    />
  )
  expect(screen.getByText("item 1 - Role 1")).toBeInTheDocument()
})

test("should render correct list items when checkedIds sepcified", () => {
  render(
    <Checklist
      data={[{ id: 1, name: "item 1", role: "Role 1" }]}
      id="id"
      primary="name"
      secondary="role"
      checkedIds={[1]}
    />
  )
  expect(screen.getByTestId("Checklist__input__1")).toBeChecked()
})
