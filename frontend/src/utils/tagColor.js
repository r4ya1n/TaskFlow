import { COLORS } from '@/constants/colors';

const COLOR_KEYS = Object.keys(COLORS);

function getTagPalette(tag_name) {
  if (!tag_name) {
    return COLORS.accent
  }
  let hash = 0;

  for (let i = 0; i < tag_name.length; i++) {
    hash = (hash * 31 + tag_name.charCodeAt(i)) % 100000;
  }

  const key = COLOR_KEYS[Math.abs(hash) % COLOR_KEYS.length];
  return COLORS[key] ?? COLORS.accent;
}

export function getTagColor(tag_name) {
  return getTagPalette(tag_name).main
}

export function getTagBgColor(tag_name) {
  return getTagPalette(tag_name).transparent
}