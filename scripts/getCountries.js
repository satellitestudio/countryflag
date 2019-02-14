#!/usr/bin/env node

const fs = require('fs')

const countries = require('world-countries/countries.json')
const simpleCountries = countries.map(country => {
  return {
    ISO2: country.cca2,
    name: country.name.common
  }
})

fs.writeFileSync('./countries.js', 'export default ' + JSON.stringify(simpleCountries))
