const evalCommand = require('../commands/evalCommand.js');
const nwordsCommand = require('../commands/nwordsCommand.js');
const chesscom = require('../commands/chesscom.js');

module.exports = async function messageCreate(message) {
    if (message.author.bot) return;
    const heilhitler = './images/heilhitler.jpg';
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

    const bociki = ["Szymon Bialik [9/11]", "Justyna Czakańska [8/11]", "Karolina Michalik [10/11]", "Katarzyna Węgrzyn [9/11]", "Magda Kiljańska [5/11]", "Oliwia Rojek [7/11]", "Maciej Macura [9/11]", "Jakub Kasperski [6/11]", "Paweł Pilipczuk [11/11]", "Bartosz Trytytka [11/11]", "Jakub Piętko [11/11]", "Jan Włodarczyk [10/11]", "Szymon Frączek [12/11]"];

    switch (message.content.toLowerCase()) {
        case '<@1242565145410928640>':
            message.reply('bocik');
            break;
        case 'bocik':
            message.reply('nie bo ty :shit: :index_pointing_at_the_viewer:');
            break;
        case 'nigga':
            message.reply(':repeat: :foot_tone5:');
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
            const image = './images/Bez_nazwy.jpg';
            await message.reply({files: [image]});
            break;
        case '🤓':
            message.reply(':nerd: :repeat:');
            break;
        case 'n':
            message.reply('i');
            break;
        case 'g':
            message.reply('g');
            break;
        case 'e':
            message.reply('r');
            break;
        default:
            break;
    }
    
    if (message.content.toLowerCase().includes('sans')) {
        message.reply('<:sansgranie:1283097393620975676>'); 
    }

    if (message.content.toLowerCase().startsWith('!nwords')) {
        nwordsCommand(message);
    }

    if (message.content.startsWith('!eval')) {
        evalCommand(message);
    }

    if (message.content.startsWith('!chesscom')) {
        chesscom(message);
    }
}