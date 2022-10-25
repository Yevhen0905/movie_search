<template>
  <div class="movies_grid">
    <router-link :to="`/movie/${movie.imdbID}`" class="movie_item" v-for="movie in allMovies" :key="movie.imdbID">  
       <img class="image" :src="movie.Poster" :alt="movie.Title">
       <h3>{{ movie.Title }}</h3>
    </router-link>
  </div>
</template>

<script>
// import router from '@/router';
import { mapGetters, mapActions } from 'vuex';

// const URL = 'http://www.omdbapi.com/?apikey=32fdeb21&s=Cats';  // перенесли в сторе
export default {
    name: "MovieList",
    mounted() {
      this.fetchMovies('Cats');
    },
    // data() {                            // замість неї  ...mapGetters(['allMovies'])}, router-link  movies -> allMovies  
    //     return {
    //         movies: []
    //     };
    // },
    // async mounted() {
    //     const res = await fetch('http://www.omdbapi.com/?apikey=32fdeb21&s=Cats');                         // перенесли в сторе
    //     const movies = await res.json();
    //     // console.log(movies);
    //     this.movies = movies.Search;
    // },
    computed: {
      ...mapGetters(['allMovies'])},
      // allMovies() {
      //   return this.$store.getters.getMovies;
      // }
    methods: {
      ...mapActions(['fetchMovies'])
    }
    // components: { router }
}
</script>

<style scoped lang="scss" src="./style.scss"></style>

