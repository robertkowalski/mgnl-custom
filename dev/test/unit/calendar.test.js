import Calendar from '../../js/calendar.js'

describe('calendar', () => {
  it('returns a Calendar instance', () => {
    expect(new Calendar('.blerg').selector).toBeTruthy()
  })

  it('renders', () => {
    document.body.innerHTML = '<div class="blerg"></div>'
    new Calendar('.blerg').render()

    const el = document.querySelectorAll('.blerg')[0]
    expect(el.innerHTML).toEqual('<div>I\'m a calendar!</div>')
  })
})
