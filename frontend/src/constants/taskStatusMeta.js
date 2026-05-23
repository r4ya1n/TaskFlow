import CheckMarkIcon from "@/icons/task_status/CheckMarkIcon.vue";
import CircleIcon from "@/icons/task_status/CircleIcon.vue";
import EyeIcon from "@/icons/task_status/EyeIcon.vue";
import PlayIcon from "@/icons/task_status/PlayIcon.vue";
import { COLORS } from "./colors";

export const TASK_STATUS = {
    todo: {
        label: "К работе",
        icon: CircleIcon,
        textColor: COLORS.gray,
        bgColor: COLORS.trGray
    },
    in_progress: {
        label: "В работе",
        icon: PlayIcon,
        textColor: COLORS.blue,
        bgColor: COLORS.trBlue
    },
    review: {
        label: "На ревью",
        icon: EyeIcon,
        textColor: COLORS.yellow,
        bgColor: COLORS.trYellow
    },
    done: {
        label: "Готово",
        icon: CheckMarkIcon,
        textColor: COLORS.teal,
        bgColor: COLORS.trTeal
    }
}