class messageController {
    constructor() {}

    send(group_id, text) {
        // Substitua 'TOKEN' pelo token do seu bot
        const tokenBot = "6477309157:AAFS-eehYbcR_WqFYOLZTJ9Ui3NRrabKKmc";
        // Retorne a promessa resultante da chamada fetch
        return fetch(`https://api.telegram.org/bot${tokenBot}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: group_id,
                    text: text
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.statusText);
                }
                return response.json();
            })
            .catch(error => {
                throw new Error('Erro ao enviar mensagem: ' + error.message);
            });
    }
}

module.exports = messageController;