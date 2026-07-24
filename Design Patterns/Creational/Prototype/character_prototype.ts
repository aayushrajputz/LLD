interface Prototype {
    clone(): Prototype
}


class GameCharacter implements Prototype {

    public name: string
    public health: number
    public weapons: string[]

    constructor(name: string, health: number, weapons: string[]) {
        this.name = name;
        this.health = health;
        this.weapons = weapons;
    }


    clone(): GameCharacter {
        return new GameCharacter(this.name, this.health, [...this.weapons])
    }

    display(): void {
        console.log(`Name:${this.name} | Health: ${this.health} | Weapon:${this.weapons.join(",")}`);

    }
}

const original = new GameCharacter("Warrior", 100, ["Sword", "Shield"]);
const cloned = original.clone();
// Verify: Clone independent hai ya nahi?
cloned.name = "Mage";
cloned.weapons.push("Staff");
original.display(); // Should show original unchanged
cloned.display();   // Should show modified clone