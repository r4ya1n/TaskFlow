import type { ValidationError } from "@/types/auth"

export function parseValidationErrors(
  errors: Record<string, string | string[]>
): ValidationError[] {
  return Object.entries(errors).flatMap(([field, value]) => {
    const messages = Array.isArray(value) ? value : [value]

    return messages.map(message => ({
      field,
      message,
    }))
  })
}