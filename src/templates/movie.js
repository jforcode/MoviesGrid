export default {
  movie: `
    <tr class="movies-grid__movie">
      <td class="movies-grid__movie-col movie__label">
        {{ movie_main_details }}
      </td>
      <td class="movies-grid__movie-col movie__genres">
        {{ movie_genres }}
      </td>
      <td class="movies-grid__movie-col movie__lang">{{ movie_language }}</td>
      <td class="movies-grid__movie-col movie__cntry">{{ movie_country }}</td>
      <td class="movies-grid__movie-col movie__rating">{{ movie_rating }}</td>
      <td class="movies-grid__movie-col movie__budget">{{ movie_budget }}</td>
      <td class="movies-grid__movie-col movie__year">{{ movie_title_year }}</td>
      <td class="movies-grid__movie-col movie__plot-words">{{ movie_plot_words }}</td>
    </tr>`,

  movieMain: `
    <div class="">
      <a href="{{ movie_url }}">
        <p class="movie__title">{{ movie_title }}</p>
      </a>
      <p class="movie__director">
        <span class="movie__main-label">Director: </span>
        <span class="movie__main-value">{{ movie_director }}</span>
      </p>
      <p class="movie__actors">
        <span class="movie__main-label">Actors: </span>
        <span class="movie__main-value">{{ movie_actors }}</span>
      </p>
    </div>`,

  movieGenres: `
    <div class="movie__genres-holder">
      {{ movie_genres }}
    </div>`
}
