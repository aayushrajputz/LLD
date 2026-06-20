# LLD Master Plan — Aayush Rajput
## Target: SDE @ PBC | Start: June 20, 2026

---

## Phase Overview (4-5 Weeks Total)

| Week | Topic | Goal |
|------|-------|------|
| Week 1 | OOPs + SOLID Principles | Foundation |
| Week 2 | Core Design Patterns (Part 1) | Creational + Structural |
| Week 3 | Core Design Patterns (Part 2) | Behavioral |
| Week 4 | Case Studies (LLD problems) | Real-world Application |
| Week 5 | API Design + DB Schema Design | Backend Bridge |

---

## Week 1: OOPs + SOLID Principles (The Foundation)

> **Why:** Bina OOPs/SOLID ke Design Patterns sirf memorization ban jaate hain. Isko samajhna = patterns apne aap samajh aayenge.

### Day 1-2: OOPs Deep Dive (Code ke saath)
- **4 Pillars with WHY:**
  - **Encapsulation:** Bina iske koi bhi class ka internal data directly tod sakta hai
  - **Abstraction:** Complexity chhupao, sirf zaruri cheez dikhao
  - **Inheritance:** Code reuse, par kab use karna chahiye aur kab nahi
  - **Polymorphism:** Ek interface, multiple behaviors
- **Hands-on:** Har pillar ke liye real problem (bina pattern ke spaghetti code) → phir OOPs se solve

### Day 3-5: SOLID Principles (One per day)
Each principle: Real-world BAD code example → WHY it breaks → SOLID-compliant FIX

1. **S - Single Responsibility:** Ek class ka ek kaam
2. **O - Open/Closed:** Extension ke liye open, modification ke liye closed
3. **L - Liskov Substitution:** Child class parent ki jagah kaam kar sake
4. **I - Interface Segregation:** Fat interfaces tod do
5. **D - Dependency Inversion:** High-level modules low-level par depend na karein

---

## Week 2: Core Design Patterns — Part 1 (Creational + Structural)

> **Format for EVERY pattern:**
> 1. Problem WITHOUT the pattern (spaghetti code)
> 2. Pattern ka concept (diagram)
> 3. TypeScript mein scratch implementation
> 4. Real-world example (Node.js/Backend context)

### Creational Patterns (Object creation):
| Pattern | Real Problem it Solves | Priority |
|---------|----------------------|----------|
| **Singleton** | DB connection pool ek se zyada baar create ho jaata | P1 (Must) |
| **Factory** | Payment gateway (Razorpay/Stripe) switch karna hard-coded hai | P1 (Must) |
| **Builder** | Complex object (HTTP Request) banane mein 10 parameters pass karne padte | P1 (Must) |
| **Prototype** | Object copy karna expensive hai | P2 (Good) |

### Structural Patterns (Object composition):
| Pattern | Real Problem it Solves | Priority |
|---------|----------------------|----------|
| **Adapter** | Third-party API ka interface hamare code se match nahi karta | P1 (Must) |
| **Decorator** | Auth, logging, caching baar baar har function mein likhna padhta | P1 (Must) |
| **Facade** | Complex subsystem (PDF generation + email + DB save) ek call mein | P1 (Must) |
| **Proxy** | Lazy loading, API caching and Access control | P2 (Good) |
| **Flyweight** | Memory footprint optimization by sharing common state | P3 (Skip/Low) |

---

## Week 3: Core Design Patterns — Part 2 (Behavioral)

| Pattern | Real Problem it Solves | Priority |
|---------|----------------------|----------|
| **Strategy** | Sorting algorithm runtime par change karna | P1 (Must) |
| **Observer** | Event system — notify multiple listeners when state changes | P1 (Must) |
| **State** | Order status machine (Pending → Processing → Shipped → Delivered) | P1 (Must) |
| **Chain of Responsibility** | Express.js middleware system (Auth -> Validation -> Rate Limit -> Controller) | P1 (Must) |
| **Repository Pattern** | Decoupling DB logic from Business logic (UserRepository, OrderRepository) | P1 (Must) |
| **Template Method** | Setting up a standard skeleton process, varying only specific steps (e.g. Payment Workflow) | P2 (Good) |
| **Specification** | Complex business rule engine (Filtering systems like Category=Electronics AND Price > 1000) | P2 (Good) |
| **Command** | Undo/Redo operations and transaction logs | P2 (Good) |
| **Iterator** | Collection traversal without exposing underlying implementation | P2 (Good) |
| **Visitor** | Adding operations to objects without modifying them | P3 (Skip) |

---

## Week 3.5: LLD Problem-Solving Framework (How to Approach ANY LLD Question)

> **Ye section sabse important hai.** Bina iske case studies mein blank ho jayega.

### Step 1: Clarifying Questions (Always FIRST!)
Interview mein seedha code mat likhna. Pehle poochho:
- Scale kitna hai? (1 city ya 1000 cities?)
- Kon se features in-scope hain? (Parking lot mein EV charging chahiye?)
- Real-time hai ya batch processing?

### Step 2: Identify Entities (Classes dhundho)
System ko sunke **nouns** dhundho — ye teri classes banti hain:
```
ParkingLot → Floors → Slots → Vehicle → Ticket → Payment
BookMyShow → Theatre → Screen → Seat → Movie → Show → Booking → User
Splitwise  → Group → User → Expense → Split → Settlement
```
> **Rule:** Agar cheez ka independent existence hai aur uske attributes hain → Entity hai

### Step 3: Define Attributes (Kya store karein?)
```
Vehicle: { id, type (2-wheeler/4-wheeler/EV), plateNumber }
Slot:    { id, type, isOccupied, floor }
Ticket:  { id, entryTime, exitTime, vehicle, slot }
```

### Step 4: Define Relationships
```
ParkingLot HAS-MANY Floors
Floor      HAS-MANY Slots
Slot       HAS-ONE  Vehicle (when occupied)
Ticket     BELONGS-TO Vehicle + Slot
```

### Step 5: Identify Behaviors (Methods dhundho)
Nouns ke baad **verbs** dhundho — ye teri methods banti hain:
```
ParkingLot.findAvailableSlot(vehicleType)
ParkingLot.parkVehicle(vehicle) → returns Ticket
ParkingLot.releaseVehicle(ticket) → calculates fee
```

### Step 6: Apply Design Patterns (Naturally, forcefully nahi)
- Multiple vehicle types → **Strategy Pattern** (fee calculation alag-alag)
- Slot availability change → **Observer Pattern** (notify karo)
- Single parking lot instance → **Singleton Pattern**

### Step 7: Edge Cases
- Parking full ho gayi toh?
- Same ticket dobara use karein toh?
- Payment fail ho gayi toh?

---

## Week 4: Case Studies (LLD Interview Problems)

> **Format:** Clarifying Questions → Entities → Relationships → Class Diagram → TypeScript Implementation → Design Patterns used

### Tier 1 — Must Do (Most Asked in Top Interviews):
1. **Parking Lot System** ← Start here (most common)
2. **BookMyShow / Movie Ticket Booking**
3. **Splitwise / Bill Splitting**
4. **ATM Machine** (Clean state machine)
5. **Vending Machine** (Classic behavioral patterns)
6. **Library Management System**
7. **Logger System** (Easy but highly conceptual)
8. **Notification System / Service** (Easy to scale conceptually)
9. **Tic Tac Toe Game** (Easy matrix manipulation)
10. **Chess Clock** (Timer handling LLD)

### Tier 2 — Should Do (PBC / Founding Engineer level):
11. **Elevator System** (Tricky state machine)
12. **Ride Sharing App — Uber LLD** (Real-world complex)
13. **Food Delivery System — Zomato/Swiggy**
14. **Hotel Booking System — OYO**
15. **Online Shopping Cart — Amazon**
16. **Social Media Feed — Instagram/Twitter**
17. **Meeting Scheduler** (Time-slot booking and calendar conflicts)
18. **Cache System (LRU)** (Data structure + LLD)
19. **URL Shortener** (Hashing, base62, and redirection)

### Tier 3 — Strong Backend/System-Heavy Problems:
20. **Rate Limiter** (Token Bucket, Leaky Bucket LLD)
21. **Distributed Cache** (Consistent hashing concepts + LLD)
22. **API Gateway** (Routing, Rate Limiting, Load balancing LLD)
23. **Chess Game** (Hard object relationships)
24. **Snake & Ladder Game** (State and turn management)
25. **Traffic Control System** (State cycles)

---

## Week 5: API Design + DB Schema (Backend Bridge)

### API Design:
- REST principles (Resources, HTTP Verbs, Status codes)
- Request-Response lifecycle
- Input validation + Error handling standards
- Rate limiting concepts
- GraphQL vs REST trade-offs

### Database Schema Design:
- Tables, Collections, Normalization
- Relationships: One-to-One, One-to-Many, Many-to-Many
- Indexing strategies (slow queries ko fast karna):
  - Clustered Index
  - Non-Clustered Index
  - Composite Index
- ACID properties
- **Live schemas:** E-commerce DB, Booking System DB, Uber DB

### Concurrency Basics (SDE-1/Founding level):
- Race Conditions (Multiple bookings for same seat)
- Optimistic Locking (Version number checks)
- Pessimistic Locking (Row-level locking)
- Idempotency (Preventing double payments)
- **UML Diagrams:** Class diagrams, Sequence diagrams (habit creation before coding)

---

## Daily Routine During LLD Phase

```
10:00 AM  → LLD concept (theory + WHY)
11:00 AM  → Hands-on implementation (TypeScript code)
12:30 PM  → Break
01:30 PM  → 3-5 LeetCode random problems (DSA rhythm)
03:00 PM  → Review + notes
```

---

## Rules (Non-Negotiable)

1. **No copy-paste:** Har pattern apne haath se likhna hai
2. **WHY first, HOW second:** Pattern ka naam ratto mat, problem samjho pehle
3. **Real examples only:** Har concept ke saath Node.js/Backend real-world connection
4. **Weekly review:** Har Sunday pichle week ke patterns bina dekhe whiteboard par explain karo

---

## TypeScript Setup (Day 1 Task)

Sirf 3 cheezein seekhni hain JS se TS mein:
```typescript
// 1. Types
let name: string = "Aayush";
let age: number = 22;

// 2. Interfaces
interface Animal {
    name: string;
    speak(): void;
}

// 3. Classes with types
class Dog implements Animal {
    name: string;
    constructor(name: string) { this.name = name; }
    speak(): void { console.log("Woof!"); }
}
```
**That's it. Baaki sab use-karte-karte seekhoge.**

---

## Success Metric

By end of Week 5, tu yeh kar sakta hoga:
- [ ] Kisi bhi LLD interview problem mein pehle clarifying questions pooch sakta ho
- [ ] Class diagram bana sakta ho
- [ ] Working TypeScript code likh sakta ho
- [ ] Trade-offs explain kar sakta ho (e.g., "Maine Singleton isliye use kiya kyunki...")
- [ ] REST API ka proper structure design kar sakta ho
- [ ] Database schema design kar sakta ho

---
*Plan created: June 20, 2026 | Coach: Antigravity*
