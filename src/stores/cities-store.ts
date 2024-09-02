import { reactive } from 'vue'

export const citiesStore = reactive({
  cities: [
    'san jose',
    'santiago',
    'san francisco',
    'santa rosa',
    'san juan',
    'sabadell',
    'salamanca',
    'salt lake city',
    'salinas',
    'salem',
    'sausalito',
    'taipei',
    'tel aviv',
    'tempe',
    'termez',
    'temuco',
    'tiajuna',
    'tieling',
    'thousand oaks',
    'thunder bay',
    'tokyo',
    'tulsa'
  ],
  filteredCities: Array<string>(),
  setCities(cities: string[]) {
    this.filteredCities = cities
  }
})
