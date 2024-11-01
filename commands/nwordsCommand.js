module.exports = async function helloCount(message) {
    let nwordCount = 0;
    const targetUser = message.mentions.users.first() || message.author;
    let lastMessageId = null;

    const isHelloInMessage = (msg) => {
        return msg.author.id === targetUser.id && msg.content.toLowerCase().includes('nigg');
    };

    do {
        let messages = await message.channel.messages.fetch({ limit: 100, before: lastMessageId });
        
        messages.forEach(msg => {
            if (isHelloInMessage(msg)) {
                nwordCount += (msg.content.toLowerCase().match(/nigg/g) || []).length;
            }
        });

        lastMessageId = messages.size > 0 ? messages.last().id : null;

    } while (lastMessageId);

    return message.reply(`${targetUser.username} powiedzial nworda ${nwordCount} razy.`);
};
