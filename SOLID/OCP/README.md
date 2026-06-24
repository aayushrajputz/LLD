# Open/Closed Principle (OCP)

> **"Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."**

---

## What does it mean? 🤔
*   **Open for Extension:** System mein naye features ya behaviors add karne ka option hamesha khula hona chahiye.
*   **Closed for Modification:** Naya feature add karte waqt, hume pehle se likhe hue aur tested code (existing classes) ko touch/modify nahi karna pade.

---

## The Analogy: Mobile Phone 📱
*   **Closed for Modification:** Tu phone ka motherboard khol kar usme naye components solder nahi karta camera badalne ke liye.
*   **Open for Extension:** Tu phone ke upar back-cover laga sakta hai, SD card dal sakta hai, ya App Store se nayi apps install kar sakta hai bina phone ke core hardware ko modify kiye.

---

## The Problem: If-Else / Switch Abuse (OCP Violation)

Soch tere paas ek notification system hai jo users ko notification bhejta hai.

```mermaid
graph TD
    subgraph Bad Design (No OCP - Modifying Existing Code)
        Manager[NotificationManager] -->|Modifies Code for each new type| SendMethod{If/Else Check}
        SendMethod -->|Type: Email| Email[Send Email]
        SendMethod -->|Type: SMS| SMS[Send SMS]
        SendMethod -->|New Type: WhatsApp| WA[Add new else-if block inside Manager]
    end

    subgraph Good Design (With OCP - Extending with Classes)
        Sender[NotificationSender Interface]
        EmailClass[EmailSender] ---|implements| Sender
        SMSClass[SMSSender] ---|implements| Sender
        WAClass[WhatsAppSender] ---|implements| Sender
        NewClass[FutureSender] -.->|Just create new class! No change to Manager| Sender
    end
```

---

## File to Implement
File Name: `invoice_ocp.ts`

### ❌ Bad Practice:
Ek class `InvoiceRepository` banao jiske andar `saveToFile` aur `saveToDatabase` methods ho. Phir ek main method `save(invoice: Invoice, type: string)` banao jo `if-else` ya `switch` check se decide kare ki kahan save karna hai.
*   **Drawback:** Kal ko agar S3 Cloud mein save karne ka feature chahiye, toh purani `InvoiceRepository` class ke andar naya `else-if` likhna padega.

###  Good Practice (OCP Clean):
1. Ek interface banao: `InvoiceSaver` jisme signature ho `save(invoice: Invoice): void`.
2. Alag-alag classes banao jo `InvoiceSaver` ko implements karein:
   - `FileInvoiceSaver`
   - `DbInvoiceSaver`
3. Kal ko agar Cloud storage aayi, toh hum bina purana code chhede ek nayi class `S3InvoiceSaver` bana lenge jo `InvoiceSaver` ko implements karegi.
