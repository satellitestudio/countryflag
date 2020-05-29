/// <reference types="../types" />
import type { Country } from 'world-countries/index'
import { TAIPEI } from '../constants'

const countries: Country[] = require('world-countries/countries.json')
const simpleCountries = countries.map((country) => {
  return { ISO2: country.cca2, ISO3: country.cca3, name: country.name.common }
})

simpleCountries.push(TAIPEI)

const fs = require('fs')
fs.writeFileSync('./countries.ts', 'export default ' + JSON.stringify(simpleCountries))
