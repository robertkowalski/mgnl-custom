// mocha based tests

const assert = require('assert')
const request = require('request')
const cheerio = require('cheerio')

const URL = 'http://localhost:8080/magnoliaPublic/ci-testpage.html'

describe('integration test', () => {

  it('renders the template with the css class furbie', (done) => {
    this.timeout(5000)

    request({
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0'
      },
      uri: URL
    }, (err, res, body) => {
      const $ = cheerio.load(body)
      assert.equal($('.furbie').length, 1)
      done()
    })
  })

  it('renders the template variable in the script tag', (done) => {
    request({
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0'
      },
      uri: URL
    }, (err, res, body) => {
      const $ = cheerio.load(body)
      const scriptTagContent = $('script').text()
      assert.ok(/\.furbie/.test(scriptTagContent), '.furbie in script')
      done()
    })
  })

})
