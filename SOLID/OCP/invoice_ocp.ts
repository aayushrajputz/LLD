// ==========================================
// SOLID: OPEN/CLOSED PRINCIPLE (OCP)
// ==========================================
// Definition: Classes extension ke liye open honi chahiye (naya code add kiya ja sake),
// par modification ke liye closed honi chahiye (existing code ko edit na karna pade).

// ❌ BAD PRACTICE: Modifying existing class for every new requirement
// Agar kal ko "Cloud" saving aayi, toh is class ke andar naya "else-if" likhna padega.
class invoicerepo {
    type: string;
    constructor(type: string) {
        this.type = type;
        if (type === "DB") {
            console.log("file save to db ");
        } else if (type === "save") {
            console.log("file save ");
        }
    }
}

// ========================================================

//  GOOD PRACTICE (OCP Clean): Using Interfaces & Polymorphism
// 1. Core Rulebook (Interface)
interface InvoiceSaver {
    save(invoice: any): void;
}

// 2. Concrete Implementation 1: File Storage
class FileInvoiceSaver implements InvoiceSaver {
    save(invoice: any): void {
        console.log("file saved successfully");
    }
}

// 3. Concrete Implementation 2: DB Storage
class DbInvoiceSaver implements InvoiceSaver {
    save(invoice: any): void {
        console.log("db saved successfully");
    }
}

// Note: Agar future mein "Cloud Storage" add karni ho, toh hum bina purane code ko touch kiye
// ek naya class (extension) add kar sakte hain:
// class CloudInvoiceSaver implements InvoiceSaver { ... }

// --- Testing OCP ---
// 1. Testing Bad Practice (Passing "save" to match condition)
const badRepo = new invoicerepo("save");

// 2. Testing Good Practice
const invoiceData = { id: 1 };
const myFile = new FileInvoiceSaver();
const myDb = new DbInvoiceSaver();

myFile.save(invoiceData);
myDb.save(invoiceData);
