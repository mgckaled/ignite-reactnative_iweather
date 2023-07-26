import { fireEvent, render, screen } from "@testing-library/react-native"

import { SelectList } from "@components/SelectList"

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Campo Grande", latitude: 789, longitude: 987 },
    ]

    const onPress = jest.fn()

    render(
      <SelectList
        data={data}
        onChange={() => {}}
        onPress={onPress}
      />
    )

    const selectedCity = screen.getByText(/campo/i)
    fireEvent.press(selectedCity)

    expect(onPress).toBeCalledWith(data[1])
  })

  it("not should be show options when data prop is empty", () => {
    render(
      <SelectList
        data={[]}
        onPress={() => {}}
        onChange={() => {}}
      />
    )
    const options = screen.getByTestId("options")
    expect(options.children).toHaveLength(0)
  })
})
