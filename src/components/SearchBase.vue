<template>
  <div class="search-component">
    <input
      type="text"
      v-model="searchTerm"
      @input="filterKeys"
      :placeholder="placeholder"
      autofocus
    />

    <p v-if="searchTerm.length > 0 && searchTerm.length < 3">Please enter at least 3 characters.</p>
    <div v-if="searchTerm.length > 2">
      <slot v-if="filteredKeys.length > 0"></slot>
      <p v-else>No results found.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBase',

  props: {
    keys: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Search...'
    }
  },

  data() {
    return {
      searchTerm: '',
      filteredKeys: []
    }
  },

  methods: {
    filterKeys() {
      this.filteredKeys = this.keys.filter((key) =>
        key.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      )

      this.$emit('update:filteredKeys', this.filteredKeys)
    }
  }
}
</script>

<style scoped>
.search-component {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;
}

input[type='text']:focus {
  border-color: #66afe9;
  outline: none;
  box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
}
</style>
