import http from 'http';
import url from 'url';

import init from "./actions/init.js";
import handleMove from "./actions/handleMove.js";
import getStat from "./actions/getStat.js";
import refreshGame from "./actions/refreshGame.js";

const port = 3030

const requestHandler = (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('ngrok-skip-browser-warning', '1');

    if(request.method === "OPTIONS") {
        response.end('')
        return
    }

    let urlParts = url.parse(request.url, true)
    let currentUserUid = parseInt(urlParts.query.uid);

    if(!currentUserUid) {
        response.end("Uid missed");
        return;
    }

    switch (urlParts.pathname) {
        case "/init":
            init(response, urlParts);
            break;
        case "/handle-move":
            handleMove(response, urlParts);
            break;
        case "/get-stat":
            getStat(response);
            break;
        case "/refresh-game":
            refreshGame(response)
            break;
        default:
            response.statusCode = 404;
            response.end();
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})