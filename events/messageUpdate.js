const { EmbedBuilder } = require('discord.js');

module.exports = async function messageUpdate(oldMessage, newMessage) {
    if (oldMessage.content === newMessage.content) return;
    if (oldMessage.author.bot || oldMessage.author.id === '952296941339934720' || oldMessage.author.id === '544594311627538443' || oldMessage.author.id === '711947999831523349') return;

    const embed = new EmbedBuilder()
        .setAuthor({
            name: newMessage.author.username,
            iconURL: newMessage.author.avatarURL()
        })
        if (oldMessage.reference) {
            const repliedMessage = await oldMessage.channel.messages.fetch(oldMessage.reference.messageId);
            embed.addFields(
                { name: 'Przed edytowaniem', value: '> ' + repliedMessage.content + '\n' + oldMessage.content || 'null', inline: false },
                { name: 'Po edytowaniu', value: newMessage.content || 'null', inline: false }
            )
        } else {
            embed.addFields(
                { name: 'Przed edytowaniem', value: oldMessage.content || 'null', inline: false },
                { name: 'Po edytowaniu', value: newMessage.content || 'null', inline: false }
            )
        }
        
        embed.setColor('Random')
    newMessage.channel.send({ embeds: [embed] });
}