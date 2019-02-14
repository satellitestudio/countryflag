import countries from './countries'
import ifEmoji from 'if-emoji'

const CODEPOINT_OFFSET = 127397
const BASE_SVG_PATH_TEMPLATE = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/4x3/{ISO2}.svg';

// Well if Bhutan is supported I think we're good to go
const supportsEmojiFlags = ifEmoji('🇧🇹')

const countryflag = _iso2 => {
  const iso2 = _iso2.toLowerCase();
  const ISO2 = _iso2.toUpperCase();
  const country = countries.find(c => c.ISO2 === ISO2)

  let emoji = null

  if (supportsEmojiFlags) {
    emoji = String.fromCodePoint(
      // maps a capital letter A with the character 🇦
      // both letters combined should return an emoji
      ISO2.codePointAt(0) + CODEPOINT_OFFSET,
      ISO2.codePointAt(1) + CODEPOINT_OFFSET
    );
  }

  const svg = BASE_SVG_PATH_TEMPLATE.replace('{ISO2}', iso2);

  return {
    emoji,
    svg,
    name: country.name
  }
}

export default countryflag