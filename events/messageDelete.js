const { EmbedBuilder } = require('discord.js');

module.exports = async function messageDelete(message) {
    if (message.author.bot || message.author.id === '952296941339934720' || message.author.id === '544594311627538443' || message.author.id === '711947999831523349') return;
    const embed = new EmbedBuilder()
        .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
        if (message.reference) {
            const repliedMessage = await message.channel.messages.fetch(message.reference.messageId);
            embed.setDescription('> ' + repliedMessage.content + '\n' + message.content || 'null');
        } else {
            embed.setDescription(message.content || 'null')
        }
        embed.setColor('Random')
    message.channel.send({embeds: [embed]});
}