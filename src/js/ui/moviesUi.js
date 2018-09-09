import templates from './../../templates/movie.js'

export default {
  moviesGrid: null,

  init: function () {
    this.moviesGrid = document.getElementById('moviesGrid')
  },

  loadMovies: function (movies) {
    this.moviesGrid
      .querySelectorAll('.movies-grid__movie')
      .forEach(movieRow => movieRow.remove())

    movies.forEach(movie => {
      let movieMainHtml = templates.movieMain.replace('{{ movie_url }}', movie.movie_imdb_link)
        .replace('{{ movie_title }}', movie.movie_title)
        .replace('{{ movie_director }}', movie.director_name)
        .replace('{{ movie_actors }}', movie.actor_1_name + ', ' + movie.actor_2_name)

      let movieGenreStr = movie.genres.split('|').map(genre => `<p class="movie__genre">${genre}</p>`).join('\n')
      let movieGenresHtml = templates.movieGenres.replace('{{ movie_genres }}', movieGenreStr)

      let moviePlotWords = movie.plot_keywords.split('|').join(', ')

      let movieHtml = templates.movie.replace('{{ movie_main_details }}', movieMainHtml)
        .replace('{{ movie_genres }}', movieGenresHtml)
        .replace('{{ movie_language }}', movie.language)
        .replace('{{ movie_country }}', movie.country)
        .replace('{{ movie_rating }}', movie.content_rating)
        .replace('{{ movie_budget }}', movie.budget)
        .replace('{{ movie_title_year }}', movie.title_year)
        .replace('{{ movie_plot_words }}', moviePlotWords)

      this.moviesGrid.innerHTML += movieHtml
    })
  }
}
