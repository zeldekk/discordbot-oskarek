const readNwordCount = require('../util/readNwordCount.js');

module.exports = async function helloCount(message) {
    const nwordCount = readNwordCount(message.author.id);

    const targetUser = message.mentions.users.first() || message.author;

    const chance = Math.floor(Math.random() * 1000);

    if (chance === 743) {
        message.reply('Ta osoba powiedziała na tyle n-wordów, że licznik jest poza skalą.');
        return;
    }

    return message.reply(`${targetUser.username} powiedzial nworda ${nwordCount} razy.`);
};
