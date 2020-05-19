const fs = require('fs');
const { promisify } = require('util');

const _copyFile = promisify(fs.copyFile);

const files = [
    { i: './node_lib/lodash/_arrayMap.js', o: './node_modules/lodash/_arrayMap.js' },
    { i: './node_lib/lodash/_arrayEvery.js', o: './node_modules/lodash/_arrayEvery.js' }
]

files.forEach(async file => {
    await _copyFile(file.i, file.o);
    console.log(`${file.i} => ${file.o}`);
});
