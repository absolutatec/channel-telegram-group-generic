const TelegramBot = require('node-telegram-bot-api');

// Substitua 'TOKEN' pelo token do seu bot
const token = '';

// Cria um novo bot
const bot = new TelegramBot(token, { polling: true });

// Substitua 'GROUP_ID' pelo ID do grupo que você deseja enviar a mensagem
const groupId = '-4240677181';

// Envia a mensagem para o grupo
bot.sendMessage(groupId, 'Olá, mundo!');

// -------------------------------------------

const TelegramBot = require('node-telegram-bot-api');

// Substitua 'TOKEN' pelo token do seu bot
const token = '6477309157:AAEC_N3ol5tOMsjKtbrfZTGWQBliQmNnkGY';

// Cria um novo bot
const bot = new TelegramBot(token, { polling: true });

// Configura um manipulador para mensagens recebidas
bot.on('message', (msg) => {
    console.log(msg.chat.id);
});
