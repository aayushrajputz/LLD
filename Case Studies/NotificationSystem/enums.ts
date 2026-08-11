export const notificationService = {
    SMS: "SMS",
    EMAIL: "EMAIL",
    PUSH: "PUSH",
} as const

export type NotificationService = (typeof notificationService)[keyof typeof notificationService]

export const notificationStatus = {
    SENT: "SENT",
    FAILED: "FAILED",
    PENDING: "PENDING",
} as const

export type NotificationStatus = (typeof notificationStatus)[keyof typeof notificationStatus]

export const notificationType = {
    USER_REGISTRATION: "USER_REGISTRATION",
    ORDER_CONFIRMATION: "ORDER_CONFIRMATION",
    ORDER_DELIVERY: "ORDER_DELIVERY",
    ORDER_CANCELLATION: "ORDER_CANCELLATION",
} as const

export type NotificationType = (typeof notificationType)[keyof typeof notificationType] 