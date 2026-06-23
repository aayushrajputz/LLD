// ==========================================
// CLASS RELATIONSHIPS: COMPOSITION (Strong HAS-A)
// ==========================================
// Composition: Parent class child objects ko khud create karti hai apne constructor mein.
// Child ka lifecycle parent par completely dependent hai.
// Matlab: Parent delete ho jaye → child bhi automatically khatam.
// Real Example: House aur Room.
//   - Room ka existence House ke bina koi matlab nahi
//   - House banao → Rooms automatic bante hain. House delete → Rooms bhi delete.
// Relationship Type: "HAS-A" (Strong / Tight ownership)

class room {
    roomNumber: number;
    constructor(roomNumber: number) {
        this.roomNumber = roomNumber;
    }
    describe(): void {
        console.log(`Room number: ${this.roomNumber}`);
    }
}

class house {
    rooms: room[];

    constructor() {
        // KEY PROOF OF COMPOSITION:
        // Room objects ANDAR bante hain House ke constructor mein.
        // Bahar se koi new room() nahi bana sakta independently.
        this.rooms = [new room(1), new room(2), new room(3), new room(4)];
    }

    showRooms(): void {
        console.log("Rooms in the house:");
        this.rooms.forEach(room => {
            room.describe();
        });
    }
}

// Sirf House bana, Rooms automatic ban gaye
const myHouse = new house();
myHouse.showRooms();

// const orphanRoom = new room(5); // Ye technically allowed hai by TS, but in design
// concept mein Room ko House ke bahar independently banana design violation hai