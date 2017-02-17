class Calendar {

  constructor (selector) {
    this.selector = selector
  }

  render () {
    const selector = this.selector

    const markup = '<div>I\'m a calendar!</div>'
    document
      .querySelectorAll(selector)[0]
      .innerHTML = markup
  }
}


export default Calendar
