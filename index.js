import { supabase } from './supabase.config.js';
import express from 'express';
import { song } from './songModel.js';
import { person } from './person.js';
import { car } from './car.js';
import { SongModel } from './model/song.model.js';
import { ArtistModel } from './model/artist.model.js';
import { AlbumModel } from './model/album.model.js';


const app = express();


app.get('/test', async (req, res) => {
    res.send("Hello World");
    let songs = await SongModel.getAllRecords();
    let artists = await ArtistModel.getAllArtists();
    let albums = await AlbumModel.getAllAlbums();
    console.log(songs);
    console.log(artists);
    console.log(albums);
    
})
const mySong = new song("Bohemian Rhapsody", "Queen");
app.get('/songs', async (req, res) => {
    res.send(mySong.present())
    console.log(Date.now());
});

app.listen(4242, () => {
    console.log("Express server kører....");
}); 
