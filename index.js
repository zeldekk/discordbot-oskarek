const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');
const config = require('./config.json');

const client = new Client({
    intents: [
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', () => {
    console.log(client.user.tag + ' jest onlajn');
    client.user.setActivity({
        name: 'Brawl Stars'
    })
})

const bociki = ["Szymon Bialik [9/11]", "Justyna Czakańska [8/11]", "Karolina Michalik [10/11]", "Katarzyna Węgrzyn [9/11]", "Magda Kiljańska [5/11]", "Oliwia Rojek [7/11]", "Maciej Macura [9/11]", "Jakub Kasperski [6/11]", "Paweł Pilipczuk [11/11]", "Bartosz Trytytka [11/11]", "Jakub Piętko [11/11]", "Jan Włodarczyk [10/11]", "Szymon Frączek [12/11]"];

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.content.toLowerCase() === '<@1242565145410928640>') {
        message.reply('bocik'); 
    }
    if (message.content.toLowerCase() === 'bocik' || message.content.toLowerCase().includes(' bocik') ) {
        message.reply('nie bo ty :shit: :index_pointing_at_the_viewer:')
    }
    if (message.content.toLowerCase().includes('nigga')) {
        message.reply(':repeat: :foot_tone5:')
    }
    if (message.content.toLowerCase() === 'https://tenor.com/view/cryptoflash-crypto-flash-tattoo-vintage-gif-27569875') {
        message.reply('to ty');
    }
    if (message.content.toLowerCase().includes('maciej')) {
        const formattedText = `
Freaky Maciej
 Freaky Maciej
  Freaky Maciej
   Freaky Maciej
    Freaky Maciej
     Freaky Maciej
      Freaky Maciej
       Freaky Maciej
        Freaky Maciej
         Freaky Maciej
          Freaky Maciej
           Freaky Maciej
            Freaky Maciej
             Freaky Maciej
              Freaky Maciej
               Freaky Maciej
                Freaky Maciej
                 Freaky Maciej
                  Freaky Maciej
                   Freaky Maciej
                    Freaky Maciej
                     Freaky Maciej
                    Freaky Maciej
                   Freaky Maciej
                  Freaky Maciej
                 Freaky Maciej
                Freaky Maciej
               Freaky Maciej
              Freaky Maciej
             Freaky Maciej
            Freaky Maciej
           Freaky Maciej
          Freaky Maciej
         Freaky Maciej
        Freaky Maciej
       Freaky Maciej
      Freaky Maciej
     Freaky Maciej
    Freaky Maciej
   Freaky Maciej
  Freaky Maciej
 Freaky Maciej
Freaky Maciej
 Freaky Maciej
  Freaky Maciej
   Freaky Maciej
    Freaky Maciej
     Freaky Maciej
      Freaky Maciej
       Freaky Maciej
        Freaky Maciej
         Freaky Maciej
          Freaky Maciej
           Freaky Maciej
            Freaky Maciej
             Freaky Maciej
              Freaky Maciej
               Freaky Maciej
                Freaky Maciej
                 Freaky Maciej
                  Freaky Maciej
                   Freaky Maciej
                    Freaky Maciej
                     Freaky Maciej
`;

        const message2 = await message.reply(formattedText);
        setTimeout(() => {
            message2.delete();
        }, 2500);
    }
    
    if (message.content.toLowerCase() === 'geo' || message.content.toLocaleLowerCase() === 'geometria') {
        message.reply(`Nigdy nie rozumiałem po co ludzie czytają treści z geometrii, to czy przeczytasz treść czy nie nie ma żadnego wpływu na wynik. Przecież zadania z geometrii są dołożone do zestawu dla beki i i tak nie da się ich zrobić. Gdzieś w krzakach siedzi Komitet Główny z ukrytą kamerą i się śmieją "haha jaki debil próbuje geometrię zrobić". Jeszcze potem na omówieniach, żeby ludzie się nie ziornęli, że to żart to robią jakieś fejkowe "dowody". Wychodzi jakiś typ, macha rękami przez 20 min, "jednokładność ch\\*j k\\*rwa". Tu sobie dorysujemy punkt i nawet nie udowodnimy, że istnieje. Tu sobie przedłużymy odcinek i on się przetnie z naszą prostą akurat tam gdzie trzeba, i też bez dowodu "bo to widać z rysunku hehe". I ludzie się na to nabierają i nadal myślą że zadania z geometrii da się zrobić. W ogóle, kto to widział, żeby na OM były zadania, gdzie trzeba rysować. To jest olimpiada MATEMATYCZNA, jak ktoś chce sobie rysować, to niech idzie na Olimpiadę Plastyczną czy coś.`)
    }

    if (message.content.toLowerCase() === '!losowybocik') {
        message.reply(bociki[Math.floor(Math.random()*bociki.length)]);
    }

    if (message.content.toLowerCase() === '🤖') {
        message.reply(':mirror:');  
    }
    
    if (message.content.toLowerCase() === 'alien') {
        message.reply('👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽👽');
    }
    if (message.content.toLowerCase() === 'alieni') {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                message.reply(':alien:');
            }, 200);
        }
    }

    if (message.content.toLocaleLowerCase() === 'alienoid') {
        const image = './Bez_nazwy.jpg';
        await message.reply({files: [image]});
    }

    if (message.content.toLocaleLowerCase().startsWith('!nwords')) {
        let helloCount = 0;
        let targetUser = message.mentions.users.first() || message.author;
        let messages;
        let lastMessageId = null;

        do {
            messages = await message.channel.messages.fetch({ limit: 100, before: lastMessageId });
            messages.forEach(msg => {
                if (msg.author.id === targetUser.id && msg.content.toLowerCase().includes('nigger')) {
                    helloCount += (msg.content.toLowerCase().match(/nigger/g) || []).length;
                }
                if (msg.author.id === targetUser.id && msg.content.toLocaleLowerCase().includes('nigga')) {
                    helloCount += (msg.content.toLowerCase().match(/nigga/g) || []).length;
                }
            });
            lastMessageId = messages.size > 0 ? messages.last().id : null;
        } while (messages.size > 0);

        message.channel.send(`${targetUser.username} powiedział nworda ${helloCount} razy.`);
    }
    if (message.content.toLowerCase() === ':nerd:') {
        message.reply(':nerd: :repeat:');
    }
    if (message.content.startsWith('!eval')) {
        if ((message.author.id === '592017236361871363' && message.content.toLowerCase().includes('message')) || (message.author.id === '1076212139729092648' && message.content.toLowerCase().includes('message'))) return;
        const code = message.content.slice(6);
        try {
            let result = await eval(code);

            const evalEmbed = new EmbedBuilder().setTitle('eval').addFields({name: 'kod',value: `\`\`\`js\n${code}\`\`\``},{name: 'result', value: `\`\`\`${result.toString()}\`\`\``}).setColor('Random')
            message.channel.send({embeds: [evalEmbed]});
        } catch (error) {
            message.channel.send(`\`\`\`js\n${error}\n\`\`\``);
        }
        }
});
client.on('messageDelete', async message => {
    if (message.author.bot) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
    .setDescription(message.content || 'null')
    .setColor('Random')
    message.channel.send({embeds: [embed]});
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (oldMessage.content === newMessage.content) return;
    if (oldMessage.author.bot) return;

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
});

client.login(config.token);