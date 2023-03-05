const event = {
    name: "ready",
    async code(client) {
        client.skyfold.sync(client.token, client.user.id).then(() => {
            console.log("Slash commands uploaded to discord API!")
        })
        console.log(`Logged in as: ${client.user.username}`)
    }
}
