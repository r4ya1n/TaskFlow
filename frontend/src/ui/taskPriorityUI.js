import Minus from "@/icons/Minus.vue";
import ArrowDownIcon from "@/icons/task_priority/ArrowDownIcon.vue";
import ArrowUpIcon from "@/icons/task_priority/ArrowUpIcon.vue";
import FireIcon from "@/icons/task_priority/FireIcon.vue";
import { COLORS } from "@/constants/colors";

export const TASK_PRIORITY_UI = {
    low: {
        label: "Низкий",
        icon: ArrowDownIcon,
        textColor: COLORS.gray.main,
        bgColor: COLORS.gray.transparent
    },
    medium: {
        label: "Средний",
        icon: Minus,
        textColor: COLORS.blue.main ,
        bgColor: COLORS.blue.transparent
    },
    high: {
        label: "Высокий",
        icon: ArrowUpIcon,
        textColor: COLORS.amber.main,
        bgColor: COLORS.amber.transparent
    },
    urgent: {
        label: "Срочно",
        icon: FireIcon,
        textColor: COLORS.red.main,
        bgColor: COLORS.red.transparent
    }
}