<template>
  <div>
    <h1>{{ title }}</h1>
    <SearchBase
      :keys="keysList"
      @update:filteredKeys="handleFilteredResults"
      placeholder="Enter city name"
    >
      <template v-slot:default>
        <ul>
          <li v-for="(key, index) in citiesStore.filteredCities" :key="index">
            <span>
              {{ key }}
            </span>
          </li>
        </ul>
      </template>
    </SearchBase>
  </div>
</template>

<script>
import { citiesStore } from '../stores/cities-store.ts'
import SearchBase from './SearchBase.vue'

export default {
  name: 'CitiesSearch',
  components: {
    SearchBase
  },
  data() {
    return {
      title: 'Cities search',
      searchQuery: '',
      citiesStore,
      keysList: citiesStore.cities
    }
  },
  methods: {
    handleFilteredResults(filteredKeys) {
      const filteredCities = this.citiesStore.cities.filter((city) => filteredKeys.includes(city))

      this.citiesStore.setCities(filteredCities)
    }
  }
}
</script>
