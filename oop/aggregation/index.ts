// ==========================================
// CLASS RELATIONSHIPS: AGGREGATION (Weak HAS-A)
// ==========================================
// Aggregation: Parent class "owns" child class, par child ka independent existence bhi hai.
// Matlab: Parent delete ho jaye toh child survive kar sakta hai.
// Real Example: Department aur Professor.
//   - Department ke paas Professors hote hain (HAS-A)
//   - Department close ho jaye → Professor survive karega, kisi aur dept mein jayega
// Relationship Type: "HAS-A" (Weak / Loose ownership)

class professor {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class department {
    deptName: string;
    professors: professor[] = []; // Department professors ko hold karti hai, par unhe create nahi karti

    constructor(deptName: string) {
        this.deptName = deptName;
    }

    // Externally bane professor ko department se link karo
    addProfessor(professor: professor): void {
        this.professors.push(professor);
    }

    showProfessor(): void {
        console.log("Professors of " + this.deptName + ":");
        this.professors.forEach(professor => {
            console.log("- " + professor.name);
        });
    }
}

// KEY PROOF OF AGGREGATION:
// Professor PEHLE bana (independently, department ke bahar)
const professor1 = new professor("Om");
const professor2 = new professor("Ravi");

// Department baad mein bani
const department1 = new department("Computer Science");

// Professors ko department se link kiya
department1.addProfessor(professor1);
department1.addProfessor(professor2);
department1.showProfessor();

// Agar department1 delete bhi ho, professor1 aur professor2 objects still exist karenge
