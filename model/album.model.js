import { supabase } from "../supabase.config.js";

export class AlbumModel {
    static async getAllAlbums() {
        try {
            // Kald til database
            let { data, error } = await supabase
                .from('albums')
                .select('id, title,artists(name), created_at')
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente albumliste, ${error}`)
        }
    }

    static async getAlbumById(id) {
        try {
            // Kald til database
            let { data, error } = await supabase
                .from('albums')
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

    static async createAlbum(formdata) {
        try {
            let { data, error } = await supabase.from('songs')
                .insert([
                    {
                        artist_id: formdata.artist_id,
                        title: formdata.title,
                        description: formdata.description,
                        image: formdata.image,
                        release_date: formdata.release_date,
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

    static async updateAlbum(formdata) {
        try {
            let { data, error } = await supabase
                .from('albums')
                .update([
                    {
                        artist_id: formdata.artist_id,
                        title: formdata.title,
                        description: formdata.description,
                        image: formdata.image,
                        release_date: formdata.release_date,
                    }
                ])
                .eq('id', formdata.id)

            if (error) {
                throw new Error(error.message);
            } else {
                return data[0]; // Return the first (and only) record
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere album, ${error}`);

        }

    }
}

