import db from "../db.js";

export default function(response) {
    db.store = Array(9).fill(0);
    response.end(JSON.stringify({}));
}