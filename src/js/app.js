import moviesSrv from './moviesSrv.js'
import moviesUi from './ui/moviesUi.js'

export default {
  pageSize: 0,

  init: function () {
    moviesUi.init()
    this.pageSize = 10
    this.loadMovies(1)
  },

  loadMovies: function (pageNum) {
    let movies = moviesSrv.fetchMovies({ pageNum, pageSize: this.pageSize })
    moviesUi.loadMovies(movies)
  }
}
