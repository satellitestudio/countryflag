import type { Country } from 'world-countries/index'
export const TAIPEI = { ISO2: 'CT', ISO3: 'TAI', name: 'Chinese Taipei' }

const countries: Country[] = require('world-countries/countries.json')
const simpleCountries = countries.map((country) => {
  return { ISO2: country.cca2, ISO3: country.cca3, name: country.name.common }
})

simpleCountries.push(TAIPEI)

const fs = require('fs')
fs.writeFileSync('./countries.ts', 'export default ' + JSON.stringify(simpleCountries))
