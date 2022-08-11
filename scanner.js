
import QrScanner from "https://nimiq.github.io/qr-scanner/qr-scanner.min.js";
const fetch = require("./fetch")


const scanner = new QrScanner(videoElem, result => fetch(result), {
    highlightScanRegion: true,
    highlightCodeOutline: true,
});


export default scanner