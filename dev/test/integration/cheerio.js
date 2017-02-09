// mocha based tests

const assert = require('assert')
const request = require('request')
const cheerio = require('cheerio')

const URL = 'http://localhost:8080/magnoliaPublic/ci-testpage.html'

describe('integration test', () => {

  it('renders the template with the css class furbie', (done) => {
    request(URL, (err, res, body) => {
      console.log(err)
      console.log(body)
      const $ = cheerio.load(body)
      assert.equal($('.furbie').length, 1)
      done()
    })
  })

  it('renders the template variable in the script tag', (done) => {
    request(URL, (err, res, body) => {
      const $ = cheerio.load(body)
      const scriptTagContent = $('script').text()
      assert.ok(/\.furbie/.test(scriptTagContent), '.furbie in script')
      done()
    })
  })

})
