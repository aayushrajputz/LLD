import { NotificationManager } from "./NotificationService.ts";
import { User } from "./User.ts"
import { notificationService } from "./enums.ts"
import { EmailNotificationChannel, SMSNotificationChannel, PushNotificationChannel } from "./NotificationChannel.ts"

const notificationManager = new NotificationManager();

// Step 1: Register Channels FIRST
notificationManager.registerChannel(notificationService.EMAIL, new EmailNotificationChannel())
notificationManager.registerChannel(notificationService.SMS, new SMSNotificationChannel())
notificationManager.registerChannel(notificationService.PUSH, new PushNotificationChannel())

// Step 2: Create Users with different preferences
const user1 = new User("U1", "Aayush", "aayush@gmail.com", "9876543210", "device_token_A", [notificationService.EMAIL, notificationService.SMS]);
const user2 = new User("U2", "Akash", "akash@gmail.com", "9123456789", "device_token_B", [notificationService.PUSH]);

console.log("\n--- Test 1: Notify Aayush (EMAIL + SMS) ---");
notificationManager.notify(user1, "Your order has been placed!");

console.log("\n--- Test 2: Notify Akash (PUSH only) ---");
notificationManager.notify(user2, "Your payment was successful!");

console.log("\n--- Test 3: Aayush adds PUSH preference ---");
user1.addPreference(notificationService.PUSH);
notificationManager.notify(user1, "Flash sale starts now!");

console.log("\n--- Test 4: Aayush removes SMS preference ---");
user1.removePreference(notificationService.SMS);
notificationManager.notify(user1, "Order delivered!");