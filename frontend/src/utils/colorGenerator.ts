import { COLOR_LIST, COLORS, type Color } from "@/constants/colors";

export function getColor(s: string, allowedColors: Color[] = COLOR_LIST): Color {
    if (!s) {
        return COLORS.Accent;
    }

    let hash = 0;

    for (let i = 0; i < s.length; i++) {
        hash = (hash * 31 + s.charCodeAt(i)) % 100000;
    }

    return allowedColors[Math.abs(hash) % allowedColors.length];
}