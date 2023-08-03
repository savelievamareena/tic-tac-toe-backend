import diRepo from "../di.js"

export default function(response, urlParts) {
    let activeUser = diRepo.calculateActiveUser();
    let responseMessage = {activeUser: activeUser};

    let currentUserUid = parseInt(urlParts.query.uid);

    if(currentUserUid === activeUser && urlParts.query.cellIndex !== undefined) {
        diRepo.db.store[parseInt(urlParts.query.cellIndex)] = currentUserUid;
        responseMessage.activeUser = diRepo.calculateActiveUser();
    }

    response.end(JSON.stringify(responseMessage));
}
