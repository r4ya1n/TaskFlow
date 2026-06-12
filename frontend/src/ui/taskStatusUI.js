import CircleIcon from "@/icons/task_status/CircleIcon.vue";
import PlayIcon from "@/icons/task_status/PlayIcon.vue";
import EyeIcon from "@/icons/task_status/EyeIcon.vue";
import CheckMarkIcon from "@/icons/task_status/CheckMarkIcon.vue";

import { COLORS } from "@/constants/colors.js";

export const TASK_STATUS_UI = {
  todo: {
    label: "К работе",
    icon: CircleIcon,
    textColor: COLORS.gray.main,
    bgColor: COLORS.gray.transparent,
  },

  in_progress: {
    label: "В работе",
    icon: PlayIcon,
    textColor: COLORS.blue.main,
    bgColor: COLORS.blue.transparent,
  },

  review: {
    label: "На ревью",
    icon: EyeIcon,
    textColor: COLORS.amber.main,
    bgColor: COLORS.amber.transparent,
  },

  done: {
    label: "Готово",
    icon: CheckMarkIcon,
    textColor: COLORS.teal.main,
    bgColor: COLORS.teal.transparent,
  },
};