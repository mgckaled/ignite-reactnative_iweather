import { render, screen } from "@testing-library/react-native"

import { SelectList } from "@components/SelectList"

describe("Component: SelectList", () => {
  it("should be return selected details", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Campo Grande", latitude: 789, longitude: 987 },
    ]
    const { debug } = render(
      <SelectList
        data={data}
        onPress={() => {}}
        onChange={() => {}}
      />
    )
    debug()

    const selectdCity = screen.getByText("Campinas")
    console.log(selectdCity)
  })
})
