import { IconArrowNarrowDown, IconArrowNarrowUp, IconFlame, IconMinus } from "@tabler/icons-vue";
import { COLORS } from "./colors";

export const TASK_PRIORITY_META = {
    LOW: {
        label: "Низкий",
        icon: IconArrowNarrowDown,
        textColor: COLORS.grey.text,
        bgColor: COLORS.grey.bg
    },
    MEDIUM: {
        label: "Средний",
        icon: IconMinus,
        textColor: COLORS.blue.text,
        bgColor: COLORS.blue.bg
    },
    HIGH: {
        label: "Высокий",
        icon: IconArrowNarrowUp,
        textColor: COLORS.amber.text,
        bgColor: COLORS.amber.bg
    },
    URGENT: {
        label: "Срочно",
        icon: IconFlame,
        textColor: COLORS.red.text,
        bgColor: COLORS.red.bg
    }
}