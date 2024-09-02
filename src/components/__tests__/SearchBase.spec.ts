import { describe, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchBase from '../SearchBase.vue'

describe('SearchBase', () => {
  const wrapper = mount(SearchBase, {
    props: {
      keys: ['san jose']
    }
  })

  test('Should show no results message when no there are no search results', async () => {
    const input = wrapper.find('input[type="text"]')

    await input.setValue('unmatched')
    expect(input.exists()).toBe(true)

    expect(wrapper.text()).toContain('No results found.')
  })

  test('Should show minimum characters message when the search query is less than 3 characters', async () => {
    const input = wrapper.find('input[type="text"]')

    await input.setValue('un')
    expect(input.exists()).toBe(true)

    expect(wrapper.text()).toContain('Please enter at least 3 characters.')
  })
})
