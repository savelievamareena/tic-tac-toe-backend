import db from "../db.js"

export default function(response, urlParts) {
    let responseMessage = {activeUser: db.activeUser};

    let currentUserUid = parseInt(urlParts.query.uid);

    if(currentUserUid === db.activeUser && urlParts.query.cellIndex !== undefined) {
        db.store[parseInt(urlParts.query.cellIndex)] = currentUserUid;
        db.activeUser = 1+(2-currentUserUid);
        responseMessage.activeUser = db.activeUser;
    }

    response.end(JSON.stringify(responseMessage));
}