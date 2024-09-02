<template>
  <main>
    <BooksSearch class="book-search"></BooksSearch>
    <CitiesSearch class="city-search"></CitiesSearch>
  </main>
</template>

<script>
import BooksSearch from './components/BooksSearch.vue'
import CitiesSearch from './components/CitiesSearch.vue'

export default {
  components: {
    BooksSearch,
    CitiesSearch
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-evenly;
}

.book-search {
  width: 350px;
  margin-right: 30px;
}

.city-search {
  width: 350px;
}
</style>
