module.exports = async function nwordsCommand(message) {
    let nwordCount = 0;
    let targetUser = message.mentions.users.first() || message.author;
    let messages;
    let lastMessageId = null;

    const isNwordInTheMessage = () => {
        return message.author.id === targetUser.id && message.content.toLowerCase().includes('nigg');
    }

    do {
        messages = await message.channel.messages.fetch({ limit: 100, before: lastMessageId });
        messages.forEach(msg => {
            if (isNwordInTheMessage()) {
                //add one to the counter for every instance in the message
                nwordCount += (msg.content.toLowerCase().match(/nigg/g) || []).length;
            }
            
        });
        lastMessageId = messages.size > 0 ? messages.last().id : null;
    } while (messages.size > 0);

    message.channel.send(`${targetUser.username} powiedział nworda ${nwordCount} razy.`);
}