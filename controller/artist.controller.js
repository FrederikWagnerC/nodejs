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