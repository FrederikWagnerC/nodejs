import express from 'express';
import { AlbumModel } from '../model/album.model.js';

export const AlbumController = express.Router();

AlbumController.get('/albums', async (req, res) => {
    let albums = await AlbumModel.getAllAlbums();
    res.send(albums);
})