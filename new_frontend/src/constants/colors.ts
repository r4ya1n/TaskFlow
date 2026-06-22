export type color = {
  text: string,
  bg: string,
  outline: string
}

export const COLORS = {
  red: {
    text: "text-red",
    bg: "bg-red/25",
    outline: "hover:outline-red"
  },
  blue: {
    text: "text-blue",
    bg: "bg-blue/25",
    outline: "hover:outline-blue"
  },
  amber: {
    text: "text-amber",
    bg: "bg-amber/25",
    outline: "hover:outline-amber"
  },
  teal: {
    text: "text-teal",
    bg: "bg-teal/25",
    outline: "hover:outline-teal"
  },
  pink: {
    text: "text-pink",
    bg: "bg-pink/25",
    outline: "hover:outline-pink"
  },
  accent: {
    text: "text-accent",
    bg: "bg-accent/25",
    outline: "hover:outline-accent"
  },
  accent2: {
    text: "text-accent2",
    bg: "bg-accent2/25",
    outline: "hover:outline-accent2"
  },
  grey: {
    text: "text-gray",
    bg: "bg-gray/25",
    outline: "hover:outline-gray"
  }
} as const;

export type ColorName = typeof COLORS[keyof typeof COLORS];
