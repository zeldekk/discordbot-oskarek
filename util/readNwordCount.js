const fs = require('fs');

module.exports = function readNwordCount(userId) {
    const nwordsFile = './nwords.json';

    let data = JSON.parse(fs.readFileSync(nwordsFile, 'utf8') || '{}');
    
    return data[userId] || 0;
}