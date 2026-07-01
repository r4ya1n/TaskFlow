import { IconCircle, IconCircleCheck, IconEye, IconPlayerPlay } from "@tabler/icons-vue";
import { COLORS } from "./colors";
import type { OptionMeta, Status } from "@/types/task";

export const TASK_STATUS_META: Record<Status, OptionMeta> = {
    TODO: {
        label: "К работе",
        icon: IconCircle,
        color: COLORS.Accent2
    },
    IN_PROGRESS: {
        label: "В работе",
        icon: IconPlayerPlay,
        color: COLORS.Blue
    },
    IN_REVIEW: {
        label: "На ревью",
        icon: IconEye,
        color: COLORS.Amber
    },
    DONE: {
        label: "Выполнено",
        icon: IconCircleCheck,
        color: COLORS.Teal
    }
}