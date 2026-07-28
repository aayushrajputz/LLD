export class User {
    private userId: string;
    private name: string;
    private email: string;

    constructor(userId: string, name: string, email: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    getUserId(): string {
        return this.userId
    }
    getName(): string {
        return this.name
    }
    getEmail(): string {
        return this.email
    }
}
