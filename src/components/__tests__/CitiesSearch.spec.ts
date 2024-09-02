import { describe, expect, test, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import CitiesSearch from '../CitiesSearch.vue'

vi.mock('../../stores/cities-store.ts', () => ({
  citiesStore: {
    cities: ['san jose'],
    filteredCities: Array<string>(),
    setCities(cities: string[]) {
      this.filteredCities = cities
    }
  }
}))

describe('CitiesSearch', () => {
  const wrapper = mount(CitiesSearch)

  test('should filter the cities when the search input changes', async () => {
    const input = wrapper.find('input[type="text"]')

    await input.setValue('san jose')
    const list = wrapper.find('li')

    expect(list.text()).toContain('san jose')
  })
})
