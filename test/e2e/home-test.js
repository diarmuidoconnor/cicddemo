const {expect} = require('chai');
const puppeteer = require('puppeteer');
var config = require('config');
let url = config.get('appURL') ;

let browser
let page

describe('First tests with puppeteer:', function () {
  this.timeout(20000);
  before(async function () {
    browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox']
        })
    page = await browser.newPage()
  })

  beforeEach(async function () {
    page = await browser.newPage()
    await page.goto(url, {timeout: 300000 })
  })

describe( 'test', () => {
  it( 'test1', async function() {
    const result = true;
    expect(result).to.equal(true);
  });
});

  afterEach(async function () {
    await page.close()
  })

  after(async function () {
    await browser.close()
  })
})