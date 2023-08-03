import diRepo from "../di.js"

export default function(response, urlParts) {
    let responseMessage = {activeUser: diRepo.calculateActiveUser()};
    response.end(JSON.stringify(responseMessage));
}
