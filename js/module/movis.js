import { connect } from "../../helpers/db/connect.js";


export class movis extends connect {
    static instance; 
    constructor() {
        if(typeof movis.instance === "object") {
            return movis.instance;
        }
        super();
        this.collection = this.db.collection("movis");
        movis.instance = this;
        return this;
    }

    async getAllMovis(){
        let res = await this.collection.aggregate([
            {
                $project: {
                    name:1
                }
            }

        ]).toArray();
        return res
    }

    async getAllMovisOfAction(){
        let res = await this.collection.find(
            {genre: {$eq : "Accion"}}
          ).toArray()
        return res
    }

    async getAllMoviesWith200Copies(){
        let res = await this.collection.find(
            {$and:[
              {"format.name": {$eq : "Bluray"}},
              {"format.copies": {$gte : 200}}
              ]}
          ).toArray()
        return res
    }

    async getAllMoviesThatDvdLessOf10(){
        let res = await this.collection.find(
            {$and:[
              {"format.name": {$eq : "dvd"}},
              {"format.copies": {$lt : 10}}
              ]}
          ).toArray()
        return res
    }

    async getAllMoviesWithACharacterNamedCobb(){
        let res = await this.collection.find(
            {"character.apodo" : {$eq : "Cobb"}}
          ).toArray()
        return res
    }

    async getAllMoviesWithActorsWithId2And3(){
        let res = await this.collection.find(
            {"character.id_actor" : {$in: [2,3]}}
          ).toArray()
        return res
    }
}