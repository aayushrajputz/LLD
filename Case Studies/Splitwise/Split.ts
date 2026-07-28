import { User } from "./User.ts";
export class Split {
    private user: User
    protected amount: number = 0

    constructor(user: User) {
        this.user = user;
    }
    getUser(): User {
        return this.user;
    }
    getAmount(): number {
        return this.amount;
    }
    setAmount(amount: number): void {
        this.amount = amount;
    }



}

export class EqualSplit extends Split {
    constructor(user: User) {
        super(user)
    }

}

export class ExactSplit extends Split {
    constructor(user: User, amount: number) {
        super(user)
        this.amount = amount;
    }

}

export class PercentageSplit extends Split {
    private percentage: number;
    constructor(user: User, percentage: number) {
        super(user)
        this.percentage = percentage;
    }

    getPercentage(): number {
        return this.percentage;
    }
}

