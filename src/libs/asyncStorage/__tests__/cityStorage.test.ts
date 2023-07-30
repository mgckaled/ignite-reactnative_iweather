import { getStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

describe("Storage: CityStorage", () => {
  it("should be return null when doesn't have a city storaged", async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it("should be return city storeged", async () => {
    const newCity: CityProps = {
      id: "1",
      name: "São Paulo",
      latitude: 123,
      longitude: 456,
    }

    await saveStorageCity(newCity)
    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  })
})
