import * as webLib from './web-lib.mjs';
import * as path from "path";
import * as fs from "fs";

import { fileURLToPath } from 'url';
// TODO: configure and start server

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __pathname = path.join(__dirname, 'config.json');
fs.readFile(__pathname, 'utf8', (err, data) => {
    if (err) {
        process.exit();
    } 
    else {
        const conf = JSON.parse(data);
        const HTTPServer = new webLib.HTTPServer(conf['root_directory'], conf.redirect_map);
        HTTPServer.listen(3000, '127.0.0.1');
    }
});