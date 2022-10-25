export default {
    state: {
        movies: []
    },
    getters: { 
        allMovies(state) {
           return state.movies
        }
    },
    mutations: {
        setMovies(state, movies) {                                   // потрібно записати що отрималои із сервака в сторе потрібна мутація
             state.movies = movies;
        }
    },
    actions: {                                      // метод який заповнює сховище сторе, екшени взаємодіють з бекендом
        async fetchMovies(ctx, searchQuery) {
        const res = await fetch('http://www.omdbapi.com/?apikey=32fdeb21&s=' + searchQuery);                         // перенесли із сторе
        const movies = await res.json();
        ctx.commit('setMovies', movies.Search);
        }
    },
}