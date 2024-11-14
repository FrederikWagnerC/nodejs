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
}