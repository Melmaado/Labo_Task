import Model from "./Model.js";
export default class Tache extends Model {
    static table = "Taches.tache";
    static primary = ["tache_id"];
}