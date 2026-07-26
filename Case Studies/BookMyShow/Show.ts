import { SeatCategory } from "./enums.ts";
import { Movie } from "./Movie.ts";
import { Screen } from "./Screen.ts";
import { ShowSeat } from "./ShowSeat.ts";


export class Show {
    private showId: string;
    private movie: Movie;
    private screen: Screen;
    private startTime: Date;
    private showSeat: Map<string, ShowSeat>

    constructor(showId: string, movie: Movie, screen: Screen, startTime: Date,) {
        this.showId = showId;
        this.movie = movie;
        this.screen = screen;
        this.startTime = startTime;
        this.showSeat = new Map<string, ShowSeat>();


        for (let seat of screen.getSeats()) {
            let price = 150;

            // 1. Pehle category check karke price nikal lo
            if (seat.getCategory() === SeatCategory.SILVER) {
                price = 150;
            } else if (seat.getCategory() === SeatCategory.GOLD) {
                price = 250;
            } else {
                price = 350;
            }
            this.showSeat.set(seat.getSeatId(), new ShowSeat(seat, price));
        }
    }
    public getShowId(): string {
        return this.showId
    }
    public getMovie(): Movie {
        return this.movie;
    }
    public getScreen(): Screen {
        return this.screen
    }
    public getShowSeat(seatId: string): ShowSeat | undefined {
        return this.showSeat.get(seatId);
    }
    public getAllShowsSeats(): Map<string, ShowSeat> {
        return this.showSeat;
    }
    public getStartTime(): Date {
        return this.startTime;
    }

}
