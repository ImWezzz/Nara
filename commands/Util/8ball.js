const { HybridBuilder, ParamsBuilder } = require("erine");

const body = {
     data: new HybridBuilder()
     .setName('8ball')
     .setDescription('Write a question '),
     params: new ParamsBuilder() 
     .addString({ name: "question", description: "Question", required: true}),
     async code(ctx) {
       const question = ["Yes", "No", "idk", "Maybe", "I don `t believe", "Yes I believe", "Ask again", "What?", "I have a little lag, ask again", "If you put your mind to it, yes", "You say?"]
        const random = question[Math.floor(Math.random() * question.length)]
        await ctx.send(`\n:8ball: ${random}`)
     }
}

module.exports = { body }
