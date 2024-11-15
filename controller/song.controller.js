import express from 'express';
import { SongModel } from '../model/song.model.js';

export const SongController = express.Router();

SongController.get('/songs', async (req, res) => {
    let songs = await SongModel.getAllRecords();
    res.send(songs);
})