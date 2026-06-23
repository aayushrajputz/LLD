class Engine {
    start() {
        console.log("engine started");
    }
}

class Gps {
    locate() {
        console.log("locating  fetching");
    }
}

class car {
    private engine: Engine;
    private GPS: Gps

    constructor() {
        this.engine = new Engine()
        this.GPS = new Gps()


    }

    start() {
        console.log("engine started");

    }
    locate() {
        console.log("locating  fetching");

    }
    drive() {
        this.engine.start()
        this.GPS.locate()
    }

}

const myCar = new car()
myCar.drive()