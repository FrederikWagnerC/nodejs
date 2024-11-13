
import { supabase } from './supabase.config.js';

import express from 'express';


const app = express();


app.get('/test', async (req, res) => {
    res.send("Hello world!");
    let { data, error } = await supabase.from('songs').select('id, title')
    if (error) {
        throw new Error(error.message);
    } else {
        console.log(data);
        
    }

});

app.listen(4242, () => {
    console.log("Express server kører....");
});

