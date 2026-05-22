import CheckMarkIcon from "@/icons/task_status/CheckMarkIcon.vue";
import CircleIcon from "@/icons/task_status/CircleIcon.vue";
import EyeIcon from "@/icons/task_status/EyeIcon.vue";
import PlayIcon from "@/icons/task_status/PlayIcon.vue";

export const TASK_STATUS = {
    todo: {
        label: "К работе",
        icon: CircleIcon,
        textColor: "text-gray",
        bgColor: "bg-tr-gray"
    },
    in_progress: {
        label: "В работе",
        icon: PlayIcon,
        textColor: "text-blue",
        bgColor: "bg-tr-blue"
    },
    review: {
        label: "На ревью",
        icon: EyeIcon,
        textColor: "text-yellow",
        bgColor: "bg-tr-yellow"
    },
    done: {
        label: "Готово",
        icon: CheckMarkIcon,
        textColor: "text-teal",
        bgColor: "br-tr-teal"
    }
}