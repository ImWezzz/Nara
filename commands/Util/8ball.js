const { HybridBuilder, ParamsBuilder } = require("erine");

const body = {
        data: new HybridBuilder()
        .setName('8ball')
        .setDescription('Preguntale algo a la bola magica'),
        params: new ParamsBuilder() 
        .addString({ name: "pregunta", description: "Pregunta", required: true}),
        async code(ctx) {
        const pregunta = ["Si", "No", "Tu crees?", "Tal vez", "No creo", "Si crees, si", "Posiblemente", "Posiblemente no", "Quien sabe", "No sé", "Habria que demostrarlo", "Efectivamente", "Por supuesto!", "Estoy más que segura", "Sii!", "Vamos :D"]
        const random = pregunta[Math.floor(Math.random() * pregunta.length)]
        await ctx.send(`\n:8ball: ${random}`)
        }
}

module.exports = { body }
