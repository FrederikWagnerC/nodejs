import { supabase } from "../supabase.config.js";

export class ArtistModel {
    static async getAllArtists() {
        try {
            // Kald til database
            let { data, error } = await supabase
                .from('artists')
                .select('id, name')
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente artistliste, ${error}`)
        }
    }

    static async getArtistById(id) {
        try {
            // Kald til database
            let { data, error } = await supabase
                .from('artists')
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

    static async createArtist(formdata) {
        try {
            let { data, error } = await supabase.from('songs')
                .insert([
                    {
                        name: formdata.name,
                        description: formdata.description,
                        image: formdata.image,
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
            console.error(`Fejl: kan ikke oprette artist, ${error}`);
        }
    }

    static async updateArtist(formdata) {
        try {
            let { data, error } = await supabase
                .from('artists')
                .update([
                    {
                        name: formdata.name,
                        description: formdata.description,
                        image: formdata.image,
                    }
                ])
                .eq('id', formdata.id)

            if (error) {
                throw new Error(error.message);
            } else {
                return data[0]; // Return the first (and only) record
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere artist, ${error}`);

        }

    }

    static async deleteArtist(formdata) {
        try {
            let { data, error } = await supabase
                .from('artist')
                .delete()
                .eq('id', formdata.id)
            if (error) {
                throw new Error(error.message)
            } else {
                return 'OK'
            }
        }


        catch (error) {
            console.error(`Fejl: kan ikke slette artist, ${error}`);
        }
    }
}