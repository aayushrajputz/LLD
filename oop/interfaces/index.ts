// ==========================================
// INTERFACES: The Strict Contract
// ==========================================
// Interface kya hai? Ek strict rules ki book (contract).
// Ye batata hai ki class ke paas kaunse variables/methods hone ZARURI hain.
// Par un methods ke andar ki implementation class khud likhti hai.

// Interface Contract
interface GPSTracker {
    getlocation(): void; // Jo bhi class isey implement karegi, uske paas getlocation() hona hi chahiye.
}

// SmartPhone class ne contract sign kiya (implements GPSTracker)
class SmartPhone implements GPSTracker {
    // contract rule ko follow kiya aur method define kiya
    getlocation(): void {
        console.log("Phone GPS location fetched");
    }
}

// watches class ne bhi same contract sign kiya
class watches implements GPSTracker {
    getlocation(): void {
        console.log("watch GPS location fetched");
    }
}

// Instantiation
const phone = new SmartPhone();
const watch = new watches();

// Methods run
phone.getlocation();
watch.getlocation();

// LLD Benefit: Main system ko chinta karne ki zaroorat nahi hai ki phone chal raha hai ya watch.
// Main system directly GPSTracker type ke variable par `.getlocation()` trigger kar sakta hai safely!
