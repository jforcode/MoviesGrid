export default {
  movies: [],

  setMovies: function (movies) {
    this.movies = movies
  },

  fetchMovies: function ({ pageNum, pageSize }) {
    let start = (pageNum - 1) * pageSize
    return this.movies.slice(start, start + pageSize)
  }
}
