import Minus from "@/icons/Minus.vue";
import ArrowDownIcon from "@/icons/task_priority/ArrowDownIcon.vue";
import ArrowUpIcon from "@/icons/task_priority/ArrowUpIcon.vue";
import FireIcon from "@/icons/task_priority/FireIcon.vue";
import { COLORS } from "./colors";

export const TASK_PRIORITY = {
    low: {
        label: "Низкий",
        icon: ArrowDownIcon,
        textColor: COLORS.gray,
        bgColor: COLORS.trGray
    },
    medium: {
        label: "Средний",
        icon: Minus,
        textColor: COLORS.blue,
        bgColor: COLORS.trBlue
    },
    high: {
        label: "Высокий",
        icon: ArrowUpIcon,
        textColor: COLORS.yellow,
        bgColor: COLORS.trYellow
    },
    urgent: {
        label: "Срочно",
        icon: FireIcon,
        textColor: COLORS.red2,
        bgColor: COLORS.trRed2
    }
}