import { User } from "./User.ts"
export interface NotificationChannel {
    update(message: string, user: User): void
}

export class EmailNotificationChannel implements NotificationChannel {
    update(message: string, user: User): void {
        console.log(`Email sent to ${user.getEmail()} : ${message}`);

    }
}
export class SMSNotificationChannel implements NotificationChannel {
    update(message: string, user: User): void {
        console.log(`SMS sent to ${user.getPhoneNumber()} : ${message}`);

    }
}

export class PushNotificationChannel implements NotificationChannel {
    update(message: string, user: User): void {
        console.log(`Push sent to ${user.getDeviceToken()} : ${message}`);

    }
}

