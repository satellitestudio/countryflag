import countries from './countries'
import ifEmoji from 'if-emoji'

const CODEPOINT_OFFSET = 127397
const BASE_SVG_PATH_TEMPLATE = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/4x3/{iso2}.svg'

// Well if Bhutan is supported I think we're good to go
// const supportsEmojiFlags = ifEmoji('🇧🇹')
const supportsEmojiFlags = true

const countryflag = iso => {
  let iso2
  let ISO2
  let country
  if (iso.length === 2) {
    iso2 = iso.toLowerCase()
    ISO2 = iso2.toUpperCase()
    country = countries.find(c => c.ISO2 === ISO2)
  }
  else if (iso.length === 3) {
    const ISO3 = iso.toUpperCase()
    country = countries.find(c => c.ISO3 === ISO3)
    ISO2 = country.ISO2
    iso2 = ISO2.toLowerCase()
  } else {
    throw new Error(iso, ' is not an ISO 2 nor ISO 3 code')
  }

  let emoji = null

  if (supportsEmojiFlags) {
    emoji = String.fromCodePoint(
      // maps a capital letter A with the character 🇦
      // both letters combined should return an emoji
      ISO2.codePointAt(0) + CODEPOINT_OFFSET,
      ISO2.codePointAt(1) + CODEPOINT_OFFSET
    );
  }

  const svg = BASE_SVG_PATH_TEMPLATE.replace('{iso2}', iso2);
  return {
    emoji,
    svg,
    name: country.name
  }
}

export default countryflag
