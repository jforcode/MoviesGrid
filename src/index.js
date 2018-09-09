require('typeface-roboto')
import './css/app.css'
import axios from 'axios'

import moviesSrv from './js/moviesSrv.js'
import app from './js/app.js'

window.app = app

axios.get('http://starlord.hackerearth.com/movieslisting')
  .then(result => {
    moviesSrv.setMovies(result.data)
    app.init()
  })
