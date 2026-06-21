import { COLORS } from '@/constants/colors';
const COLOR_KEYS = Object.values(COLORS) as { text: string; bg: string }[];

// return pair class. Example: {text: "text-red", bg: "bg-red/25"}
export function getColor(s: string): { text: string; bg: string } {
    if (!s) {
        return COLORS.accent;
    }

    let hash = 0;

    for (let i = 0; i < s.length; i++) {
        hash = (hash * 31 + s.charCodeAt(i)) % 100000;
    }

    return COLOR_KEYS[Math.abs(hash) % COLOR_KEYS.length];
}