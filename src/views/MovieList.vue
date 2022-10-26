<template>
  <div>
    <div class="block_search">
      <h2>SEARCH MOVIE</h2>
      <input v-model="searchQuery" type="text" class="input_search" placeholder="type movie name...">
      <button @click="findFilm()"  type="button" class="search_button">Search</button>
    </div>
    <div class="movies_grid">
      <router-link :to="`/movie/${movie.imdbID}`" class="movie_item" v-for="movie in allMovies" :key="movie.imdbID">
      <img class="image" :src="movie.Poster" :alt="movie.Title">
      <h3>{{ movie.Title }}</h3>
    </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "MovieList",
  data() {
     return {
      searchQuery: '',
     }
  },
  mounted() {
    this.findFilm();
  },

  computed: {
    ...mapGetters(['allMovies'])
  },

  methods: {
    ...mapActions(['fetchMovies']),
    findFilm() {
       this.fetchMovies(this.searchQuery)
    }
  }
}
</script>

<style scoped lang="scss" src="./style.scss">

</style>

