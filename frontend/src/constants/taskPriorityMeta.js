import Minus from "@/icons/Minus.vue";
import ArrowDownIcon from "@/icons/task_priority/ArrowDownIcon.vue";
import ArrowUpIcon from "@/icons/task_priority/ArrowUpIcon.vue";
import FireIcon from "@/icons/task_priority/FireIcon.vue";

export const TASK_PRIORITY = {
    low: {
        label: "Низкий",
        icon: ArrowDownIcon,
        textColor: "text-gray",
        bgColor: "bg-tr-gray"
    },
    medium: {
        label: "Средний",
        icon: Minus,
        textColor: "text-blue",
        bgColor: "bg-tr-blue"
    },
    high: {
        label: "Высокий",
        icon: ArrowUpIcon,
        textColor: "text-yellow",
        bgColor: "bg-tr-yellow"
    },
    urgent: {
        label: "Срочно",
        icon: FireIcon,
        textColor: "text-red2",
        bgColor: "bg-tr-red2"
    }
}