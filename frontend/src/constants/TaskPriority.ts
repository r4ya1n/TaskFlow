import { IconArrowNarrowDown, IconArrowNarrowUp, IconFlame, IconMinus } from "@tabler/icons-vue";
import { COLORS } from "./colors";
import type { OptionMeta, Priority } from "@/types/task";

export const TASK_PRIORITY_META: Record<Priority, OptionMeta> = {
    URGENT: {
        label: "Срочно",
        icon: IconFlame,
        textColor: COLORS.red.text,
        bgColor: COLORS.red.bg
    },
    HIGH: {
        label: "Высокий",
        icon: IconArrowNarrowUp,
        textColor: COLORS.amber.text,
        bgColor: COLORS.amber.bg
    },
    MEDIUM: {
        label: "Средний",
        icon: IconMinus,
        textColor: COLORS.blue.text,
        bgColor: COLORS.blue.bg
    },
    LOW: {
        label: "Низкий",
        icon: IconArrowNarrowDown,
        textColor: COLORS.grey.text,
        bgColor: COLORS.grey.bg
    },
}