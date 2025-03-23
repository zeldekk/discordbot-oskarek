const { EmbedBuilder } = require('discord.js');

module.exports = async function evalCommand(message) {
    if (message.author.id !== '952296941339934720') return;

    const code = message.content.slice(6);

    let flags = [];

    const matches = message.content.match(/-(\w+)/g) || [];

    if (matches) {
        flags.push(...matches.map(flag => flag[1]));
    }
    try {
        let result = await eval(code);
        if (!flags.includes("s")) {
            const evalEmbed = new EmbedBuilder().setTitle('eval').addFields({name: 'kod',value: `\`\`\`js\n${code}\`\`\``},{name: 'result', value: `\`\`\`${result.toString()}\`\`\``}).setColor('Random')
            message.channel.send({embeds: [evalEmbed]});
        }
    } catch (error) {
        console.log(error);
    }

    if (flags.includes('d')) {
        message.delete();
    }
}