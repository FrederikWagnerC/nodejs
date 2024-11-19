import { supabase } from "../supabase.config.js";

export class SongModel {
    static async getAllRecords() {
        try {
            // Kald til database
            let { data, error } = await supabase
                .from('songs')
                .select('id, artists(name)')
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente sangliste, ${error}`)
        }
    }

    static async getRecordById(id) {
        try {
            // Kald til database
            let { data, error } = await supabase
                .from('songs')
                .select('*')
                .eq('id', id)
                .single()
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente sangliste, ${error}`)
        }
    }

    static async createRecord(formdata) {
        try {
            let { data, error } = await supabase.from('songs')
                .insert([
                    {
                        title: formdata.title,
                        content: formdata.content,
                        lyrics: formdata.lyrics,
                        artist_id: formdata.artist_id
                    }
                ])
                .select('*') // Ensure the inserted record is returned
            if (error) {
                throw new Error(error.message);
            } else {
                return data[0]; // Return the first (and only) record
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke oprette sang, ${error}`);
        }
    }

    static async updateRecord(formdata) {
        try {
            let { data, error } = await supabase
                .from('songs')
                .update([
                    {
                        title: formdata.title,
                        content: formdata.content,
                        lyrics: formdata.lyrics,
                        artist_id: formdata.artist_id
                    }
                ])
                .eq('id', formdata.id)

            if (error) {
                throw new Error(error.message);
            } else {
                return data[0]; // Return the first (and only) record
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere sang, ${error}`);

        }

    }

}
