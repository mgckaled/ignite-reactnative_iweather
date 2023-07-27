import { api } from "../api"

import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse"
import { getCityByNameService } from "@services/getCityByNameService"

describe("Service: getCityByNameService", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })

    const resposnse = await getCityByNameService("São Paulo")

    expect(resposnse.length).toBeGreaterThan(0)
  })
})
