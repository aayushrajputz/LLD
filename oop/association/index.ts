class patient {
    name: string
    constructor(name: string) {
        this.name = name
    }
}
class Doctor {
    name: string
    patients: patient[] = []
    constructor(name: string) {
        this.name = name
    }

    addPatient(patient: patient): void {
        this.patients.push(patient);
    }
    showPatient(): void {
        console.log("patients of " + this.name + ":");
        this.patients.forEach(patient => {
            console.log("- " + patient.name);
        });

    }
}

const doc = new Doctor("dr rajesh kapoor")
const p1 = new patient("mr. om")
doc.addPatient(p1);
doc.showPatient();


