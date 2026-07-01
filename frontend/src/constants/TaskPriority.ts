import { IconArrowNarrowDown, IconArrowNarrowUp, IconFlame, IconMinus } from "@tabler/icons-vue";
import { COLORS } from "./colors";
import type { OptionMeta, Priority } from "@/types/task";

export const TASK_PRIORITY_META: Record<Priority, OptionMeta> = {
    URGENT: {
        label: "Срочно",
        icon: IconFlame,
        color: COLORS.Red
    },
    HIGH: {
        label: "Высокий",
        icon: IconArrowNarrowUp,
        color: COLORS.Amber
    },
    MEDIUM: {
        label: "Средний",
        icon: IconMinus,
        color: COLORS.Blue
    },
    LOW: {
        label: "Низкий",
        icon: IconArrowNarrowDown,
        color: COLORS.Gray
    },
}