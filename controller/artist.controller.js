import express from 'express';
import { ArtistModel } from '../model/artist.model.js';

export const ArtistController = express.Router();

ArtistController.get('/artists', async (req, res) => {
    let artists = await ArtistModel.getAllArtists();
    res.send(artists);
})

ArtistController.get('/artists/:id([0-9]*)', async (req, res) => {
    const data = await ArtistModel.getArtistById(req.params.id);
    console.log(data);
    
})

ArtistController.post('/songs', async (req, res) => {
    const data = await ArtistModel.createArtist(req.body)
    res.send(data)
    console.log(data.id);
    
    console.log(req.body);
});

ArtistController.put('/songs', async (req, res) => {
    const data = await ArtistModel.updateArtist(req.body)
    res.send(data)
    console.log(req.body);
});