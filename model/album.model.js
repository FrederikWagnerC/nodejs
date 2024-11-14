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
}