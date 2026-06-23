// Bad Practise

class user {
    name: string
    email: string
    phone: number
    address: string
    DOB: number
    LinkedinUrl: string
    constructor(name: string, email: string, phone: number, address: string, DOB: number, LinkedinUrl: string) {
        this.name = name
        this.email = email
        this.phone = phone
        this.address = address
        this.DOB = DOB
        this.LinkedinUrl = LinkedinUrl
    }

}

class User {
    name: string
    email: string
    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
    sendWelcomeMail(): void {
        console.log(`welcome to our app  ${this.name} at ${this.email} this mail is send by our app`);

    }
}

const Userr = new User("Om", "om@gmai.com")
Userr.sendWelcomeMail();