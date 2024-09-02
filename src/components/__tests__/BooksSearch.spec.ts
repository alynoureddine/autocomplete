import { describe, expect, test, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import BooksSearch from '../BooksSearch.vue'

vi.mock('../../stores/books-store.ts', () => ({
  booksStore: {
    books: [
      {
        title: 'Don Quixote',
        author: 'Miguel De Cervantes'
      }
    ],
    filteredBooks: Array<Book>(),
    setBooks(books: Book[]) {
      this.filteredBooks = books
    }
  }
}))

describe('BooksSearch', () => {
  const wrapper = mount(BooksSearch)

  test('should filter the books when the search input changes', async () => {
    const input = wrapper.find('input[type="text"]')

    await input.setValue('Don Quixote')
    const list = wrapper.find('li')

    expect(list.text()).toContain('Don Quixote')
  })
})
