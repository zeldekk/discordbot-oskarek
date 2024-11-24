const { Client, IntentsBitField, EmbedBuilder, PermissionsBitField, Colors } = require('discord.js');
const config = require('./config.json');
const messageCreate = require('./events/messageCreate.js');
const messageDelete = require('./events/messageDelete.js');
const messageUpdate = require('./events/messageUpdate.js');
const ready = require('./events/ready.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', async (client) => {
    ready(client);
});

client.on('messageCreate', async message => {
    messageCreate(message);
});
client.on('messageDelete', async message => {
    messageDelete(message);
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    messageUpdate(oldMessage, newMessage);
});

client.login(config.token);