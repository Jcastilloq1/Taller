export class Series {
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    poster: string

    public constructor(name: string, channel: string, seasons: number, description: string, webpage: string, poster: string)
    {
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webpage = webpage;
        this.poster = poster
    }

}
