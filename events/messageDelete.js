module.exports = function messageDelete(message) {
    if (message.author.bot || message.author.id === '952296941339934720' || message.author.id === '544594311627538443' || message.author.id === '711947999831523349') return;
    const embed = new EmbedBuilder()
    .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
    .setDescription(message.content || 'null')
    .setColor('Random')
    message.channel.send({embeds: [embed]});
}