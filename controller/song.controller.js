import express from 'express';
import { SongModel } from '../model/song.model.js';

export const SongController = express.Router();



SongController.get('/songs', async (req, res) => {
    let songs = await SongModel.getAllRecords();
    res.send(songs);
})

SongController.get('/songs/:id([0-9]*)', async (req, res) => {
    const data = await SongModel.getRecordById(req.params.id);
    console.log(data);

})

SongController.post('/songs', async (req, res) => {
    const data = await SongModel.createRecord(req.body)
    res.send(data)
    console.log(data.id);

    console.log(req.body);
});

SongController.put('/songs', async (req, res) => {
    const data = await SongModel.updateRecord(req.body)
    res.send(data)
    console.log(req.body);
});

