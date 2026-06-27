import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            700: "#4a42b6",
            400: "var(--color-accent)"
        },
        red: {
            700: "var(--color-red)",
            400: "var(--color-red2)"
        }
    },
    components: {
        datepicker: {
            date: {
                selectedColor: "var(--color-text)"
            }
        }
    }
});

export default MyPreset