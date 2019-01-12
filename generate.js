const fs = require('fs');
const path = require('path');
const readline = require('readline');

const logFile = path.join(__dirname, process.argv[2]);
const outFile = path.join(path.dirname(logFile), 'index.html');
const logStream = fs.createReadStream(logFile);
const reader = readline.createInterface(logStream);

const scrawl = require('./scribetool/scrawl');
scrawl.date = path.dirname(logFile).split(path.sep).pop();
require('./scribetool/scrawl-config')(scrawl);

let logLines = [];
reader.on('line', line => {
    return logLines.push(line);
});

reader.on('close', () => {
    const generated = scrawl.generateMinutes(logLines, 'html');

    fs.writeFileSync(outFile, scrawl.htmlHeader + generated + scrawl.htmlFooter);
});
