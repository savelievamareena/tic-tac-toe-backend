import db from "./db.js";
import calculateActiveUser from "./utils.js";
import config from "./config.js";

export default {
    config: config,
    db: db,
    calculateActiveUser: calculateActiveUser
}
