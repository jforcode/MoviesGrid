import moviesSrv from './moviesSrv.js'
import moviesUi from './ui/moviesUi.js'
import statusUi from './ui/statusUi.js'

export default {
  pageSize: 0,
  currPageNum: 0,
  lastPageNum: 0,

  init: function () {
    moviesUi.init()
    statusUi.init()
    this.pageSize = 10
    this.loadMovies(1)
  },

  loadMovies: function (pageNum) {
    statusUi.setAppStatus('Loading...')
    let movies = moviesSrv.fetchMovies({ pageNum, pageSize: this.pageSize })
    this.currPageNum = pageNum
    this.lastPageNum = 50
    moviesUi.loadMovies(movies)
    statusUi.setAppStatus(movies && movies.length > 0 ? `Showing ${movies.length} results` : 'No results')
    statusUi.setPaginationStatus({ currPageNum: this.currPageNum, lastPageNum: this.lastPageNum })
  },

  loadFirstPage: function () {
    this.loadMovies(1)
  },

  loadPrevPage: function () {
    this.loadMovies(this.currPageNum - 1)
  },

  loadNextPage: function () {
    this.loadMovies(this.currPageNum + 1)
  },

  loadLastPage: function () {
    this.loadMovies(this.lastPageNum)
  }
}
