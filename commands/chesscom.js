module.exports = async function chesscom(message) {
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