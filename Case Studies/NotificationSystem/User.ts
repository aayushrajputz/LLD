import { NotificationService } from './enums.ts'
export class User {
    private id: string;
    private name: string;
    private email: string;
    private phoneNumber: string;
    private deviceToken: string;
    private preferences: NotificationService[];


    constructor(
        id: string,
        name: string,
        email: string,
        phoneNumber: string,
        deviceToken: string,
        initialPreferences: NotificationService[] = []
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.deviceToken = deviceToken;
        this.preferences = initialPreferences;
    }

    public getId(): string { return this.id; }
    public getName(): string { return this.name; }
    public getEmail(): string { return this.email; }
    public getPhoneNumber(): string { return this.phoneNumber; }
    public getDeviceToken(): string { return this.deviceToken; }
    public getPreferences(): NotificationService[] { return this.preferences; }

}