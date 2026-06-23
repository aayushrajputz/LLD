// ==========================================
// CLASSES AND OBJECTS: Blueprint vs Instance
// ==========================================
// Class: Ek blueprint (naksha) hai jo design batata hai. Iska memory space nahi hota.
// Object: Ek instance hai jo actual RAM mein space leta hai (new keyword se banta hai).

class User {
    username: string;
    email: string;
    password: string;

    // Constructor: Jab naya object banta hai, ye automatic run hota hai values initialize karne ke liye.
    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method: Class ke andar ka function
    displayProfile(): void {
        console.log(`User:${this.username},Email:${this.email}`);
    }
}

// user1 ko memory heap mein ek block mila
const user1 = new User("Aayush", "aayush@gmail.com", "aayush123");
user1.displayProfile(); // reads data from user1's memory block

// user2 ko memory heap mein ek alag block mila (Dono isolated hain)
const user2 = new User("Abhishek", "abhishek@gmail.com", "Abhishekaayush124");
user2.displayProfile(); // reads data from user2's memory block