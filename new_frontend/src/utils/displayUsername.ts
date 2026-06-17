import type { User } from "@/types/auth";
import { capitalizeText } from "./capitalizeText";

export function displayFullUsername(user: User | null): string {
    if (user) {
        if (user.first_name && user.last_name) {
            return capitalizeText(user.first_name) + " " + capitalizeText(user.last_name)
        }
        return user.username
    }
    return ""
}

export function displayShortUsername(user: User | null): string {
    if (user) {
        if (user.first_name && user.last_name) {
            return capitalizeText(user.first_name) + " " + user.last_name[0].toUpperCase() + '.'
        }
        return user.username
    }
    return ""
}