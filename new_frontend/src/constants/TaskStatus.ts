import { IconCircle, IconCircleCheck, IconEye, IconPlayerPlay } from "@tabler/icons-vue";
import { COLORS } from "./colors";

export const TASK_STATUS_META = {
    TODO: {
        label: "К работе",
        icon: IconCircle,
        textColor: COLORS.accent2.text,
        bgColor: COLORS.accent2.bg
    },
    IN_PROGRESS: {
        label: "В работе",
        icon: IconPlayerPlay,
        textColor: COLORS.blue.text,
        bgColor: COLORS.blue.bg
    },
    IN_REVIEW: {
        label: "На ревью",
        icon: IconEye,
        textColor: COLORS.amber.text,
        bgColor: COLORS.amber.bg
    },
    DONE: {
        label: "Выполнено",
        icon: IconCircleCheck,
        textColor: COLORS.teal.text,
        bgColor: COLORS.teal.bg
    }
}