import express from 'express';
import { AlbumModel } from '../model/album.model.js';

export const AlbumController = express.Router();

AlbumController.get('/albums', async (req, res) => {
    let albums = await AlbumModel.getAllAlbums();
    res.send(albums);
})

AlbumController.get('/albums/:id([0-9]*)', async (req, res) => {
    const data = await AlbumModel.getAlbumById(req.params.id);
    console.log(data);
    
})

AlbumController.post('/songs', async (req, res) => {
    const data = await AlbumModel.createArtist(req.body)
    res.send(data)
    console.log(data.id);
    
    console.log(req.body);
});