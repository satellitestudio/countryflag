import countries from './countries'
import ifEmoji from 'if-emoji'
import { TAIPEI } from './constants'

// IE polyfills
import 'core-js/stable/string/from-code-point'
import 'core-js/stable/string/code-point-at'
import 'core-js/stable/string/repeat'
import 'core-js/stable/array/find'

const CODEPOINT_OFFSET = 127397
const BASE_SVG_PATH_TEMPLATE =
  'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/4x3/{iso2}.svg'

// Well if Bhutan is supported I think we're good to go
const supportsEmojiFlags = ifEmoji('🇧🇹')

const countryflag = (iso: string) => {
  let iso2: string
  let ISO2: string
  let country
  if (iso.length === 2) {
    iso2 = iso.toLowerCase()
    ISO2 = iso2.toUpperCase()
    country = countries.find((c) => c.ISO2 === ISO2)
    if (country === undefined) {
      throw new Error(`Could not find a country corresponding to provided ISO: ${iso}`)
    }
  } else if (iso.length === 3) {
    const ISO3 = iso.toUpperCase()
    country = countries.find((c) => c.ISO3 === ISO3)
    if (country === undefined) {
      throw new Error(`Could not find a country corresponding to provided ISO: ${iso}`)
    }
    ISO2 = country.ISO2
    iso2 = ISO2.toLowerCase()
  } else {
    throw new Error(`${iso} is not an ISO 2 nor ISO 3 code`)
  }

  let emoji = null

  if (supportsEmojiFlags && ISO2 && ISO2 !== TAIPEI.ISO2) {
    const codePoint0 = ISO2!.codePointAt(0)
    const codePoint1 = ISO2!.codePointAt(1)
    if (codePoint0 && codePoint1) {
      emoji = String.fromCodePoint(
        // maps a capital letter A with the character 🇦
        // both letters combined should return an emoji
        codePoint0 + CODEPOINT_OFFSET,
        codePoint1 + CODEPOINT_OFFSET
      )
    }
  }

  let svg = BASE_SVG_PATH_TEMPLATE.replace('{iso2}', iso2)
  if (ISO2 === TAIPEI.ISO2) {
    svg = supportsEmojiFlags
      ? 'https://raw.githubusercontent.com/satellitestudio/countryflag/master/no-flag.png'
      : 'https://raw.githubusercontent.com/satellitestudio/countryflag/master/no-flag.svg'
  }

  return {
    emoji,
    svg,
    name: country.name,
  }
}

export default countryflag
