async function evalCommand() {
    if (message.author.id !== '952296941339934720') return;
    const code = message.content.slice(6);
    try {
        let result = await eval(code);

        const evalEmbed = new EmbedBuilder().setTitle('eval').addFields({name: 'kod',value: `\`\`\`js\n${code}\`\`\``},{name: 'result', value: `\`\`\`${result.toString()}\`\`\``}).setColor('Random')
        message.channel.send({embeds: [evalEmbed]});
    } catch (error) {
        message.channel.send(`\`\`\`js\n${error}\n\`\`\``);
    }
}

module.exports = { evalCommand }