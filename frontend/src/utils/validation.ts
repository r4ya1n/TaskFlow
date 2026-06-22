export const handleValidationErrors = (
    error: any,
    errorFlags: Record<string, boolean>
) => {
    if (error.response?.data) {
        Object.keys(error.response.data).forEach(field => {
            if (field in errorFlags) {
                errorFlags[field] = true
            }
        })
    }
}