import { supabase } from './supabase.config.js';
import dotenv from 'dotenv';
import express from 'express';
import { song } from './songModel.js';
import { person } from './person.js';
import { car } from './car.js';
import { SongModel } from './model/song.model.js';
import { ArtistModel } from './model/artist.model.js';
import { AlbumModel } from './model/album.model.js';
import { SongController } from './controller/song.controller.js';
import { ArtistController } from './controller/artist.controller.js';
import { AlbumController } from './controller/album.controller.js';
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(SongController);
app.use(ArtistController);
app.use(AlbumController);

app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});


// app.get('/test', async (req, res) => {
//     res.send("Hello World");
//     let songs = await SongModel.getAllRecords();
//     let artists = await ArtistModel.getAllArtists();
//     let albums = await AlbumModel.getAllAlbums();
//     console.log(songs);
//     console.log(artists);
//     console.log(albums);
    
// })
// const mySong = new song("Bohemian Rhapsody", "Queen");
// app.get('/songs', async (req, res) => {
//     res.send(mySong.present())
//     console.log(Date.now());
// });

