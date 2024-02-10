const { SlashCommandBuilder, Client } = require('discord.js')

module.exports = {
    name:"ping",
    description: "Returns bot status",
    type: "command",
    enabled: true,
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Returns bot latency"),
    
        /**
         * 
         * @param {GuildInteraction} interaction 
         * @param {Client} client 
         * @param {Commands[]} commands 
         */
    execute: function(interaction, client, commands) {
        interaction.reply(`🏓 Pong! ${interaction.createdTimestamp - Date.now()}ms`)
    }
}