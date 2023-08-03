import prompt from 'prompt-sync';
let promptFunc = prompt()
const name = promptFunc('Now run debug and press Enter...');

import diRepo from "./di.js";

diRepo.db.store[1] = 1;
diRepo.db.store[3] = 2;
diRepo.db.store[5] = 1;
diRepo.db.store[7] = 2;


let activeUser = diRepo.calculateActiveUser();
console.assert(activeUser===2, diRepo.db.store, activeUser)
