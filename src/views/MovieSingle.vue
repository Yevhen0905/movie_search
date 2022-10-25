<template>
    <div>
        <p>Movie</p>
        <img :src="movie.Poster" :alt="movie.Title">
        <h3>{{ movie.Title }}</h3>
        <p>{{ movie.Genre }}</p>
    </div>
</template>

<script>
export default {
    name: 'MovieSingle',
    data() {
        return {
            movie: {}
        }
    },
    mounted() {
        this.getMovie();
    },
    methods: {
        async getMovie() {
            const filmId = this.$route.params.id;
            const res = await fetch(`http://www.omdbapi.com/?apikey=32fdeb21&i=${filmId}`);
            const movie = await res.json();
            // console.log(movie);
            this.movie = movie;
        }
    },
    watch: {
        $route(to, from) {
            if(to != from) {
                this.getMovie();
            }
        }
    }
}
</script>