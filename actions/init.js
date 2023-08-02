import db from "../db.js"

export default function(response, urlParts) {
    let responseMessage = {activeUser: db.activeUser};
    response.end(JSON.stringify(responseMessage));
}