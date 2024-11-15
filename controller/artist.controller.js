import express from 'express';
import { ArtistModel } from '../model/artist.model.js';

export const ArtistController = express.Router();

ArtistController.get('/artists', async (req, res) => {
    let artists = await ArtistModel.getAllArtists();
    res.send(artists);
})