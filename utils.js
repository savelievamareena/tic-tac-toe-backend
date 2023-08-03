import diRepo from "./di.js"

export default function calculateActiveUser() {
    let activeUser = diRepo.config.FIRST_PLAYER_ID;

    let movesCount = diRepo.db.store.filter((element) => element > 0);
    if(movesCount.length % 2 !== 0) {
        activeUser = 1+(2-activeUser);
    }

    return activeUser;
}