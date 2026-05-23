import CheckMarkIcon from "@/icons/task_status/CheckMarkIcon.vue";
import CircleIcon from "@/icons/task_status/CircleIcon.vue";
import EyeIcon from "@/icons/task_status/EyeIcon.vue";
import PlayIcon from "@/icons/task_status/PlayIcon.vue";
import { COLORS } from "./colors";

export const TASK_STATUS = {
    todo: {
        label: "К работе",
        engLabel: "todo",
        icon: CircleIcon,
        textColor: COLORS.gray,
        bgColor: COLORS.trGray,
        group: "status"
    },
    in_progress: {
        label: "В работе",
        engLabel: "in_progress",
        icon: PlayIcon,
        textColor: COLORS.blue,
        bgColor: COLORS.trBlue,
        group: "status"
    },
    review: {
        label: "На ревью",
        engLabel: "review",
        icon: EyeIcon,
        textColor: COLORS.yellow,
        bgColor: COLORS.trYellow,
        group: "status"
    },
    done: {
        label: "Готово",
        engLabel: "done",
        icon: CheckMarkIcon,
        textColor: COLORS.teal,
        bgColor: COLORS.trTeal,
        group: "status"
    }
}