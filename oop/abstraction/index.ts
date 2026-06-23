class badCoffeeMachine {
    public grindBeans() {
        console.log("Grinding coffee beans...")
    }
    public brewCoffee() {
        console.log("brewing fresh coffee");

    }
    public boilWater() {
        console.log("boiling water... ");

    }
}

const machine = new badCoffeeMachine();
machine.boilWater();
machine.brewCoffee();
machine.grindBeans();


class goodCoffeeMachine {
    private grindBeans() {
        console.log("grinding coffee beans..");


    }
    private brewCoffee() {
        console.log("brewing coffee");

    }
    private boilWater() {
        console.log("boiling water");

    }
    public makeCoffee() {
        this.grindBeans();
        this.boilWater();
        this.brewCoffee();
        console.log("here is your perfect coffee");

    }
}

const goodMachine = new goodCoffeeMachine();
goodMachine.makeCoffee(); 