export const COLORS = {
  Accent: "accent",
  Accent2: "accent2",
  Blue: "blue",
  Teal: "teal",
  Amber: "amber",
  Pink: "pink",
  Red: "red",
  Red2: "red2",
  Gray: "gray"
} as const;

export type Color = typeof COLORS[keyof typeof COLORS];
export const COLOR_LIST = Object.values(COLORS);

export type ColorName = typeof COLORS[keyof typeof COLORS];
