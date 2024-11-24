module.exports = function messageUpdate(oldMessage, newMessage) {
    if (oldMessage.content === newMessage.content) return;
    if (oldMessage.author.bot || oldMessage.author.id === '952296941339934720' || oldMessage.author.id === '544594311627538443' || oldMessage.author.id === '711947999831523349') return;

    const embed = new EmbedBuilder()
        .setAuthor({
            name: newMessage.author.username,
            iconURL: newMessage.author.avatarURL()
        })
        .addFields(
            { name: 'Przed edytowaniem', value: oldMessage.content || 'null', inline: false },
            { name: 'Po edytowaniu', value: newMessage.content || 'null', inline: false }
        )
        .setColor('Random')
    newMessage.channel.send({ embeds: [embed] });
}