import diRepo from "../di.js";
const calculateActiveUser = diRepo.calculateActiveUser;
const db = diRepo.db;

export default function(response, urlParts) {
    let activeUser = calculateActiveUser();
    if(urlParts.query.cellIndex !== undefined) {
        let requestUid = parseInt(urlParts.query.uid);
        if(requestUid === activeUser) {
            let cellIndex = parseInt(urlParts.query.cellIndex);
            if(db.store[cellIndex] === 0) {
                db.store[cellIndex] = requestUid;
            }
        }
    }
    response.end(JSON.stringify({}));
}
