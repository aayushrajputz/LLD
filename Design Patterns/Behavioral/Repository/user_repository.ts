interface User {
    id: string;
    name: string;
    email: string;
}

interface UserRepository {
    save(user: User): void
    findById(id: string): User | null
    findAll(): User[]

}

class InMemoryUserRepository implements UserRepository {
    constructor(private storage: User[] = []) {

    }
    save(user: User): void {
        this.storage.push(user);
    }
    findById(id: string): User | null {
        return this.storage.find(u => u.id === id) || null
    }
    findAll(): User[] {
        return this.storage
    }


}

class UserService {
    constructor(private userRepository: UserRepository) {

    }
    register(name: string, email: string) {
        if (this.userRepository.findById(email)) {
            throw new Error("User already exists")
        }
        const user: User = {
            id: Math.random().toString(36).substring(2),
            name,
            email
        }
        this.userRepository.save(user)


    }
}