export default {
  appStatus: null,
  pageHolder: null,
  pageFirst: null,
  pagePrev: null,
  pageStatus: null,
  pageNext: null,
  pageLast: null,

  init: function () {
    this.appStatus = document.querySelector('#appStatus')
    this.pageHolder = document.querySelector('#pageHolder')
    this.pageFirst = document.querySelector('#pageFirst')
    this.pagePrev = document.querySelector('#pagePrev')
    this.pageStatus = document.querySelector('#pageStatus')
    this.pageNext = document.querySelector('#pageNext')
    this.pageLast = document.querySelector('#pageLast')
  },

  setAppStatus: function (status) {
    this.appStatus.innerHTML = status
  },

  setPaginationStatus: function ({ currPageNum, lastPageNum }) {
    if (!currPageNum || !lastPageNum) {
      pageHolder.style.visibility = 'hidden'
      return
    }

    pageHolder.style.visibility = 'visible'
    pageFirst.disabled = currPageNum === 1
    pagePrev.disabled = currPageNum === 1
    pageNext.disabled = currPageNum === lastPageNum
    pageLast.disabled = currPageNum === lastPageNum
    pageStatus.innerHTML = `Page ${currPageNum} of ${lastPageNum}`
  }
}
