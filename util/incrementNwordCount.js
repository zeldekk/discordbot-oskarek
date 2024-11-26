const fs = require('fs');

module.exports = function incrementNwordCount(userId, nwordCountInTheMessage) {

    const nwordsFile = './nwords.json';

    try {
        if (!fs.existsSync(nwordsFile)) {
            fs.writeFileSync(nwordsFile, JSON.stringify({}, null, 4), 'utf8');
        }

        let data = JSON.parse(fs.readFileSync(nwordsFile, 'utf8') || '{}');

        if (data[userId]) {
            data[userId] = parseInt(data[userId]) + nwordCountInTheMessage;
        } else {
            data[userId] = nwordCountInTheMessage;
        }

        fs.writeFileSync(nwordsFile, JSON.stringify(data, null, 4), 'utf8');
    } catch (error) {
        console.error(`Error updating nword count: ${error.message}`);
    }
}