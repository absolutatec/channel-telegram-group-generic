const express = require("express");
const router = express.Router();

messageController = require("../controllers/messageController")
messageController = new messageController();


router.post("/send", (req, res) => {
    const {
        chat_id,
        text,
        latitude,
        longitude,
        document,
        media
    } = req.body;
    console.log(document)
    if (document) {
        //Tratamendo se for documento
        messageController.send(chat_id, text).then(
            res.status(200).send({
                "success": true,
                "message": "Mensagem enviada"
            })
        ).catch(e => {
            console.error(e);
            res.status(500).send({
                "success": false,
                "message": "Erro ao enviar mensagem"
            })
        })
    } else if (media) {
        //Tratamento se for foto ou video
        messageController.send(chat_id, text).then(
            res.status(200).send({
                "success": true,
                "message": "Mensagem enviada"
            })
        ).catch(e => {
            console.error(e);
            res.status(500).send({
                "success": false,
                "message": "Erro ao enviar mensagem"
            })
        })
    } else if (latitude || longitude) {
        //Tratamento se for localização
        messageController.send(chat_id, text).then(
            res.status(200).send({
                "success": true,
                "message": "Mensagem enviada"
            })
        ).catch(e => {
            console.error(e);
            res.status(500).send({
                "success": false,
                "message": "Erro ao enviar mensagem"
            })
        })
    } else if(text) {
        //Tratamento se for texto
        messageController.send(chat_id, text).then(
            res.status(200).send({
                "success": true,
                "message": "Mensagem enviada"
            })
        ).catch(e => {
            console.error(e);
            res.status(500).send({
                "success": false,
                "message": "Erro ao enviar mensagem"
            })
        })
    }

})

module.exports = router;