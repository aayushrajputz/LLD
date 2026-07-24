interface User {
    id: string;
    name: string;
    email: string;
}

interface UserRepository {
    save(user: User): void;
    findById(id: string): User | null;
    findByEmail(email: string): User | null;
    findAll(): User[];
}

class InMemoryUserRepository implements UserRepository {
    private storage: User[];

    constructor(storage: User[] = []) {
        this.storage = storage;
    }

    save(user: User): void {
        this.storage.push(user);
    }

    findById(id: string): User | null {
        return this.storage.find(u => u.id === id) || null;
    }

    findByEmail(email: string): User | null {
        return this.storage.find(u => u.email === email) || null;
    }

    findAll(): User[] {
        return this.storage;
    }
}

class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    register(name: string, email: string) {
        if (this.userRepository.findByEmail(email)) {
            throw new Error("User already exists");
        }
        const user: User = {
            id: Math.random().toString(36).substring(2),
            name,
            email
        };
        this.userRepository.save(user);
    }
}

// 1. Repository banayi
const userDb = new InMemoryUserRepository();

// 2. Service banayi aur Repository inject ki
const authService = new UserService(userDb);

// 3. User Register kiya
authService.register("Aayush", "aayush@gmail.com");
authService.register("Om", "om@gmail.com");

// 4. Print results
console.log("All registered users:");
console.log(userDb.findAll());

// 5. Test Duplicate Check
try {
    console.log("\nTrying to register Aayush again...");
    authService.register("Aayush Duplicate", "aayush@gmail.com");
} catch (error: any) {
    console.log("Expected Error Caught:", error.message);
}

