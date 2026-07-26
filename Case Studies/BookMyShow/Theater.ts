import { Screen } from "./screen.ts";

export class Theater {
    private theaterId: string;
    private name: string;
    private city: string;
    private screens: Screen[];

    constructor(theaterId: string, name: string, city: string) {
        this.theaterId = theaterId;
        this.name = name;
        this.city = city;
        this.screens = [];
    }

    addScreen(screen: Screen): void {
        screen.setTheatre(this); // Screen ko apna reference de do
        this.screens.push(screen);
    }

    getScreens(): Screen[] {
        return this.screens;
    }

    getCity(): string {
        return this.city;
    }

    getId(): string {
        return this.theaterId;
    }

    getName(): string {
        return this.name;
    }
}