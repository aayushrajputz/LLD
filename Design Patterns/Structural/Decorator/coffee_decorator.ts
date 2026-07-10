interface coffee {
    getDescription(): string
    getCost(): number


}

class simpleCoffee implements coffee {
    getDescription(): string {
        return "simple coffee"
    }
    getCost(): number {
        return 50
    }

}

class coffeeDecorator implements coffee {
    protected wrappedCoffee: coffee;

    constructor(coffee: coffee) {
        this.wrappedCoffee = coffee
    }
    getDescription(): string {
        return this.wrappedCoffee.getDescription()
    }
    getCost(): number {
        return this.wrappedCoffee.getCost()
    }
}


class milkDecorator extends coffeeDecorator {
    getDescription(): string {

        return this.wrappedCoffee.getDescription() + " with milk"
    }

    getCost(): number {
        return this.wrappedCoffee.getCost() + 10
    }
}

class sugarDecorator extends coffeeDecorator {
    getDescription(): string {
        return this.wrappedCoffee.getDescription() + " and sugar"
    }
    getCost(): number {
        return this.wrappedCoffee.getCost() + 5
    }
}

class vanilaDecorator extends coffeeDecorator {
    getDescription(): string {
        return this.wrappedCoffee.getDescription() + " and vanila"
    }
    getCost(): number {
        return this.wrappedCoffee.getCost() + 15
    }
}

let myCoffee: coffee = new simpleCoffee();
myCoffee = new milkDecorator(myCoffee);
myCoffee = new sugarDecorator(myCoffee);
myCoffee = new vanilaDecorator(myCoffee);

console.log(myCoffee.getDescription());
console.log(myCoffee.getCost());
