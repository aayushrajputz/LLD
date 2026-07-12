# Proxy Design Pattern (Structural Pattern)

> **"Provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something before or after the request gets through to the original object."**

---

## Simple Version (Aasan Bhasha Mein)
Proxy pattern ka matlab hai ki **original object ke aage ek "guard" ya "middleman" khada kar dena** jo decide karega ki request original object tak pahunchni chahiye ya nahi.

Proxy same interface implement karta hai jo original object implement karta hai, isliye client ko pata hi nahi chalta ki wo proxy se baat kar raha hai ya original se.

---

## The Analogy: ATM Machine 🏧
Soch tera paisa bank ke vault mein hai (Real Object). Tu directly vault mein nahi jata. Tu **ATM (Proxy)** ke through access karta hai.
*   ATM pehle tera **PIN verify** karta hai (Access Control).
*   ATM check karta hai **balance sufficient** hai ya nahi.
*   Phir ATM internally bank ke server se baat karke paisa deta hai.
*   Tujhe lagta hai tu directly bank se interact kar raha hai, par beech mein ATM (Proxy) saara control handle kar raha hai.

---

## 3 Common Types of Proxy:

| Type | Kya karta hai? | Example |
|:---|:---|:---|
| **Protection Proxy** | Access control — check karta hai ki user authorized hai ya nahi | Admin-only API routes |
| **Virtual Proxy** | Lazy loading — heavy object tab tak create nahi karta jab tak zaroorat na ho | Large image loading |
| **Caching Proxy** | Response cache karta hai taaki baar-baar original object ko call na karna pade | API response caching |

---

## The Problem: Unprotected Access ❌
```typescript
const database = new RealDatabase();
database.query("DROP TABLE users"); // Koi bhi kuch bhi kar sakta hai!
```
**Dikkat:** Koi bhi user bina check ke directly sensitive operations run kar sakta hai.

---

## The Solution: Protection Proxy ✅
```typescript
const database = new DatabaseProxy(realDB, currentUser);
database.query("DROP TABLE users"); 
// Proxy checks: "Is user ADMIN?" → No → Access Denied!
```

---

## File to Implement
File Name: `db_proxy.ts`

### Task Description:
Hum ek Database Access Control system banayenge using Protection Proxy.

1. **Common Interface (`Database`):**
   - Method: `query(sql: string): void`
2. **Real Subject (`RealDatabase`):**
   - Implements `Database`.
   - `query(sql)` simply logs: `"Executing query: [sql]"`.
3. **Proxy Class (`DatabaseProxy`):**
   - Implements `Database`.
   - Constructor mein accept kare: `realDatabase: RealDatabase` aur `userRole: string`.
   - `query(sql)` ke andar pehle check kare:
     - Agar `userRole === "admin"` → allow query, internally `realDatabase.query(sql)` call kare.
     - Agar `userRole !== "admin"` → block kare aur log kare: `"Access Denied: You do not have permission to execute queries."`.
4. **Client Code:**
   - Admin user se query run karo (should succeed).
   - Normal user se query run karo (should be blocked).
