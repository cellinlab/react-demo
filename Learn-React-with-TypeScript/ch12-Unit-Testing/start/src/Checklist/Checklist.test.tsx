import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Checklist } from "./Checklist"
import { IdValue } from "../../../../ch11-Resuable-Components/demo/src/CheckList/types"

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

test("should check and uncheck items when clicked", async () => {
  const user = userEvent.setup()
  render(
    <Checklist
      data={[{ id: 1, name: "item 1", role: "Role 1" }]}
      id="id"
      primary="name"
      secondary="role"
    />
  )
  const checkbox = screen.getByTestId("Checklist__input__1")
  expect(checkbox).not.toBeChecked()
  await user.click(checkbox)
  expect(checkbox).toBeChecked()
  await user.click(checkbox)
  expect(checkbox).not.toBeChecked()
})

test("should call onCheckedIdsChange when clicked", async () => {
  const user = userEvent.setup()
  let callWith: IdValue[] | undefined = undefined
  render(
    <Checklist
      data={[{ id: 1, name: "item 1", role: "Role 1" }]}
      id="id"
      primary="name"
      secondary="role"
      onCheckedIdsChange={(checkedIds) => {
        callWith = checkedIds
      }}
    />
  )
  const checkbox = screen.getByTestId("Checklist__input__1")
  expect(checkbox).not.toBeChecked()
  await user.click(checkbox)
  expect(callWith).toEqual([1])
})
