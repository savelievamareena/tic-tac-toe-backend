import diRepo from "../di.js";
let config = diRepo.config;
let db = diRepo.db;

export default function(response) {
    let responseMessage = {
        firstPlayerId: config.FIRST_PLAYER_ID,
        store: db.store
    };
    response.end(JSON.stringify(responseMessage));
}

