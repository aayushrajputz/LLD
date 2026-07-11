// ========================================================
// OBSERVER DESIGN PATTERN (PUB-SUB MODEL)
// ========================================================
// Definition: Ek object (Subject) ke state change hone par baaki sabhi 
// dependent objects (Observers) ko automatically notify karna.

// 1. Observer Interface (Subscriber contract)
interface observer {
    update(message: string): void;
}

// 2. Subject Interface (Publisher contract)
interface subject {
    subscribe(user: observer): void;
    unSubscribe(user: observer): void;
    golive(streamTitle: string): void;
    notify(message: string): void;
}

// 3. Concrete Subject (The Publisher)
class YoutubeChannel implements subject {
    // List of active subscribers
    private subscribers: observer[] = [];
    private latestVideo: string = "";

    subscribe(user: observer): void {
        this.subscribers.push(user);
        console.log("New subscriber added.");
    }

    unSubscribe(user: observer): void {
        this.subscribers = this.subscribers.filter(sub => sub !== user);
        console.log("Subscriber removed.");
    }
    golive(streamTitle: string): void {
        this.notify("is LIVE now: " + streamTitle);
    }

    notify(message: string): void {
        // Broadcast the notification to all registered observers
        for (let sub of this.subscribers) {
            sub.update(message);
        }
    }

    uploadVideo(title: string): void {
        console.log(`\n--- Uploading Video: ${title} ---`);
        this.latestVideo = title;
        this.notify("uploaded a new video: " + title)
        // Automatically notify observers
    }
}

// 4. Concrete Observer (The Subscriber)
class user implements observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(message: string): void {
        console.log('[Notification]' + this.name + '-' + message);
    }
}

// ========================================================
// --- Client Execution ---
// ========================================================
const createChannel = new YoutubeChannel();

const user1 = new user("Aayush");
const user2 = new user("Ayushi");
const user3 = new user("Ayushik");

// Subscribing users
createChannel.subscribe(user1);
createChannel.subscribe(user2);
createChannel.subscribe(user3);

// Uploading video (All 3 should get notified)
createChannel.uploadVideo("Video1");

// Unsubscribing a user
console.log("");
createChannel.unSubscribe(user2);

// Uploading another video (Only user1 and user3 should get notified)
createChannel.uploadVideo("Video2");

createChannel.golive("Live Stream");

