const get = require('lodash/get')

const keys = ['name', 'comments.count']
const users = [{
    name: 'alexei',
    comments: {
      count: 11
    }
  },
  {
    name: 'valeri',
    comments: {
      count: 12
    }
  },
  {
    name: 'alesya',
    comments: {
      count: 10
    }
  }
]

function _sortByNumberOrCharCodes(reverse, a, b) {
  if(a > b) {
    return reverse
  } else if(a < b) {
    return -1 * reverse
  }

  return 0
}

function _sortByKey(rule, a, b) {
  const [key, reverse] = rule
  return _sortByNumberOrCharCodes(reverse, get(a, key), get(b, key))
}

function sort(collection, rules) {
  return collection.sort((a, b) => {
    for(let rule of rules) {
      const res = _sortByKey(rule, a, b)

      if(res) {
        return res
      }
    }

    return 0
  })
}



console.log(JSON.parse('{"0":1}'))
