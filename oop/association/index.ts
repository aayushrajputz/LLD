// ==========================================
// CLASS RELATIONSHIPS: ASSOCIATION
// ==========================================
// Association: Do classes aapas mein connected hain, par dono ka lifecycle bilkul independent hai.
// Matlab: Ek ke bina doosra exist kar sakta hai.
// Real Example: Doctor aur Patient. Doctor delete karo, Patient survive karega.
// Relationship Type: "Uses-A" ya "Connected-To"

class patient {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Doctor {
    name: string;
    // Doctor ke paas patients ka ek array hai (connection hai, ownership nahi)
    patients: patient[] = [];

    constructor(name: string) {
        this.name = name;
    }

    // Patient ko Doctor se link karo (association banao)
    addPatient(patient: patient): void {
        this.patients.push(patient);
    }

    // Doctor ke saare linked patients dikhao
    showPatient(): void {
        console.log("Patients of Dr. " + this.name + ":");
        // forEach: array ke har ek element par loop chalata hai
        this.patients.forEach(p => {
            console.log("- " + p.name);
        });
    }
}

// KEY PROOF OF ASSOCIATION:
// patient aur Doctor objects alag-alag bante hain (no dependency on each other)
const doc = new Doctor("Rajesh Kapoor");
const p1 = new patient("Om");
const p2 = new patient("Ravi");

// Baad mein in dono ko link kiya (associated)
doc.addPatient(p1);
doc.addPatient(p2);
doc.showPatient();
