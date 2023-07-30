import { render, screen } from "@testing-library/react-native"

import { NextDays } from "@components/NextDays"

import clearDay from "@assets/clear_day.svg"

describe("Component: NextDays", () => {
  it("should be render next days", () => {
    render(
      <NextDays
        data={[
          { day: "31/07", min: "30°c", max: "34°c", icon: clearDay, weather: "Céu limpo" },
          { day: "01/08", min: "20°c", max: "28°c", icon: clearDay, weather: "Nublado" },
          { day: "02/08", min: "25°c", max: "30°c", icon: clearDay, weather: "Céu limpo" },
          { day: "03/08", min: "26°c", max: "29°c", icon: clearDay, weather: "Céu limpo" },
          { day: "04/08", min: "23°c", max: "27°c", icon: clearDay, weather: "Chuva Fraca" },
        ]}
      />
    )
    expect(screen.getByText("01/08")).toBeTruthy()
  })
})
