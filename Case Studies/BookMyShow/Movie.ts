export class Movie {
    private id: string;
    private title: string;
    private durationInMins: number;

    constructor(id: string, title: string, durationInMins: number) {
        this.id = id;
        this.title = title;
        this.durationInMins = durationInMins;
    }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDurationInMins(): number {
        return this.durationInMins;
    }
}