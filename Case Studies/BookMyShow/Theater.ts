import { Screen } from "./Screen";


export class Theater {
    private theaterId: string;
    private name: string;
    private city: string;
    private screens: Screen[]

    constructor(theaterId: string, name: string, city: string, screens: Screen[]) {
        this.theaterId = theaterId;
        this.name = name;
        this.city = city;
        this.screens = screens;
    }
    addSceens(screen: Screen): void {
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