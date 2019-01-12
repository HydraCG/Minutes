const fs = require('fs');
const path = require('path');
const readline = require('readline');

const logFile = path.join(__dirname, process.argv[2]);
const outFile = path.join(path.dirname(logFile), 'index.html');
const logStream = fs.createReadStream(logFile);
const reader = readline.createInterface(logStream);
const audioExists = fs.existsSync(path.join(path.dirname(logFile), 'audio.mp3'));

const scrawl = require('./scribetool/scrawl');
scrawl.date = path.dirname(logFile).split(path.sep).pop();
require('./scribetool/scrawl-config')(scrawl);

let ircLines = [];
reader.on('line', line => {
    return ircLines.push(line);
});

reader.on('close', () => {
    const generated = scrawl.generateMinutes({ ircLines, textMode: 'html', includeAudio: audioExists });

    fs.writeFileSync(outFile, `---
layout: default
title: Telecon Minutes for ${scrawl.date} | Hydra W3C Community Group
date: ${scrawl.date}
${frontMatterCollection('actions', generated.actions)}
${frontMatterCollection('resolutions', generated.resolutions)}
---

${generated.content}`);
});

function frontMatterCollection(name, array) {
    if(array.length === 0) {
        return ''
    }

    return `${name}:
${array.map(a => `- ${a}`).join('\n')}`
}
