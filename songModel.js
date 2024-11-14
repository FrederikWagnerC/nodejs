export class song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
    present() {
        console.log(`The song is ${this.title} by ${this.artist}`);
        
    }
}


