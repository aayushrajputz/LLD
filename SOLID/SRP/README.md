# Single Responsibility Principle (SRP)

> **"A class should have one, and only one, reason to change."**

SRP ka simple matlab hai ki ek class ke paas sirf **ek hi main responsibility** honi chahiye. Agar ek class multiple unrelated tasks handle kar rahi hai, toh use design ki bhasha mein "God Class" ya bloated class bolte hain, aur isse maintenance and testing mushkil ho jata hai.

---

## The Analogy: The Multi-tasking Chef 🍳
Soch ek Chef hai jise restaurant mein:
1. Khana banana hai (Core Responsibility)
2. Dishes wash karni hain (Cleaning Responsibility)
3. Accounts manage karne hain (Accounting Responsibility)

Agar kitchen ka washing system change hota hai, ya tax rules badalte hain, toh hume **Chef class** ko edit karna padega. Ye SRP violation hai.
**Solution:** Chef sirf cook karega, Cleaner clean karega, aur Accountant billing dekhega.

---

## Structure: Bad vs Good

```mermaid
graph TD
    subgraph Bad Design (No SRP)
        Invoice[Invoice Class] -->|Calculates| Total
        Invoice -->|Prints| console.log
        Invoice -->|Saves| Database
    end

    subgraph Good Design (With SRP)
        InvoiceGood[Invoice Class] -->|Only Calculates| Total
        Printer[InvoicePrinter] -->|Only Prints| console.log
        Repo[InvoiceRepository] -->|Only Saves| Database
    end
```

---

## File to Implement
File Name: `invoice_srp.ts`
- **Bad Practice Class:** `Invoice` containing calculation, print, and save logic.
- **Good Practice Classes:**
  - `Invoice` (stores book details, calculates total price/tax)
  - `InvoicePrinter` (takes an Invoice object and prints it)
  - `InvoiceRepository` (takes an Invoice object and saves/logs it)
