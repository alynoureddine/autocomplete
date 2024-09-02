<template>
  <div>
    <h1>{{ title }}</h1>
    <SearchBase
      :keys="keysList"
      @update:filteredKeys="handleFilteredResults"
      placeholder="Enter book name"
    >
      <template v-slot:default>
        <ul>
          <li v-for="(key, index) in booksStore.filteredBooks" :key="index">
            <div>
              <span class="book-title">
                {{ key.title }}
              </span>
            </div>
            <div>
              <span class="book-author"> Author: {{ key.author }} </span>
            </div>
          </li>
        </ul>
      </template>
    </SearchBase>
  </div>
</template>

<script>
import { booksStore } from '../stores/books-store.ts'
import SearchBase from './SearchBase.vue'

export default {
  name: 'BooksSearch',
  components: {
    SearchBase
  },
  data() {
    return {
      title: 'Books search',
      searchQuery: '',
      booksStore,
      keysList: booksStore.books.map((book) => book.title)
    }
  },
  methods: {
    handleFilteredResults(filteredKeys) {
      const filteredBooks = this.booksStore.books.filter((book) =>
        filteredKeys.includes(book.title)
      )

      this.booksStore.setBooks(filteredBooks)
    }
  }
}
</script>

<style scoped>
.book-title {
  font-weight: bold;
}

.book-author {
  font-style: italic;
}
</style>
