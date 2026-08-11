import { User } from "./User.ts";
import { NotificationService, } from "./enums.ts";
import { NotificationChannel } from "./NotificationChannel.ts";
export class NotificationManager {
    private channels = new Map<NotificationService, NotificationChannel>()

    registerChannel(type: NotificationService, channel: NotificationChannel): void {
        this.channels.set(type, channel)
    }

    notify(user: User, message: string) {
        const userPreferences = user.getPreferences();
        for (const pref of userPreferences) {
            const channel = this.channels.get(pref)
            if (channel) {
                channel.update(message, user)
            }
        }
    }
}