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
}