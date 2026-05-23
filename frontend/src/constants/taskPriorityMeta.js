import Minus from "@/icons/Minus.vue";
import ArrowDownIcon from "@/icons/task_priority/ArrowDownIcon.vue";
import ArrowUpIcon from "@/icons/task_priority/ArrowUpIcon.vue";
import FireIcon from "@/icons/task_priority/FireIcon.vue";
import { COLORS } from "./colors";

export const TASK_PRIORITY = {
    low: {
        label: "Низкий",
        engLabel: "low",
        icon: ArrowDownIcon,
        textColor: COLORS.gray,
        bgColor: COLORS.trGray,
        group: "priority"
    },
    medium: {
        label: "Средний",
        engLabel: "medium",
        icon: Minus,
        textColor: COLORS.blue,
        bgColor: COLORS.trBlue,
        group: "priority"
    },
    high: {
        label: "Высокий",
        engLabel: "high",
        icon: ArrowUpIcon,
        textColor: COLORS.yellow,
        bgColor: COLORS.trYellow,
        group: "priority"
    },
    urgent: {
        label: "Срочно",
        engLabel: "urgent",
        icon: FireIcon,
        textColor: COLORS.red2,
        bgColor: COLORS.trRed2,
        group: "priority"
    }
}