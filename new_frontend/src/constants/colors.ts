export const COLORS = {
  red: {
    text: "text-red",
    bg: "bg-red/25"
  },
  blue: {
    text: "text-blue",
    bg: "bg-blue/25"
  },
  amber: {
    text: "text-amber",
    bg: "bg-amber/25"
  },
  teal: {
    text: "text-teal",
    bg: "bg-teal/25"
  },
  pink: {
    text: "text-pink",
    bg: "bg-pink/25"
  },
  accent: {
    text: "text-accent",
    bg: "bg-accent/25"
  },
  accent2: {
    text: "text-accent2",
    bg: "bg-accent2/25"
  },
  grey: {
    text: "text-gray",
    bg: "bg-gray/25"
  }
} as const;

export type ColorName = typeof COLORS[keyof typeof COLORS];
