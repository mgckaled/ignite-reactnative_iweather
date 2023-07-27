import { api } from "../api"

import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse"
import { getWeatherByCityService } from "@services/getWeatherByCityService"

describe("Service: getWeatherByCityService", () => {
  it("should be return weather api formatted data", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse })

    const resposnse = await getWeatherByCityService({ latitude: 123, longitude: 456 })

    expect(resposnse).toHaveProperty("today")
  })
})
