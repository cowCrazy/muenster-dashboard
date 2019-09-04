
const { url, eSurl } = require('./config.json')

console.log('https://elasticsearch.codeformuenster.org')

const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  host: 'https://elasticsearch.codeformuenster.org',
  log: 'trace',
})

client.ping({
  requestTimeout: 30000,
}, (error) => {
  if (error) {
    console.error('elasticsearch cluster is down!')
  } else {
    console.log('All is well')
  }
})

client.search({
  index: 'places',
  type: 'place',
  body: {
    query: {
      match: {
        body: '*',
      },
    },
  },
}).then((resp) => {
  const { hits } = resp.hits
}, (err) => {
  console.trace(err.message)
})


module.exports = () => 'Hello world'
