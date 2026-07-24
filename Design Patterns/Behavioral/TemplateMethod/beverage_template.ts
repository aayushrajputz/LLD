abstract class Beverage {
    prepareRecipe() {
        this.boilWater();
        this.brew();
        this.pourIntoCup();
        this.addCondiments();
    }
    boilWater() {
        console.log("water boiling");

    }
    pourIntoCup() {
        console.log("pouring into cups");

    }
    abstract brew(): void;
    abstract addCondiments(): void;
}
class tea extends Beverage {
    brew(): void {
        console.log("tea leaves");

    }
    addCondiments(): void {
        console.log("sugar and lemon");

    }
}
class coffe extends Beverage {
    brew(): void {
        console.log("coffee beans");

    }
    addCondiments(): void {
        console.log("milk and sugar");

    }
}

const Tea = new tea()
const Coffee = new coffe()

Tea.prepareRecipe()
Coffee.prepareRecipe()    