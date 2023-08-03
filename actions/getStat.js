import diRepo from "../di.js";

export default function(response) {
    let responseMessage = {status: 1, store: [...diRepo.db.store]};
    response.end(JSON.stringify(responseMessage));
}

