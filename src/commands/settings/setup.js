const { SlashCommandBuilder, Client, ChatInputCommandInteraction, Collection } = require('discord.js')
const { getData, pushData } = require("../../core/database")
const { successEmbed } = require('../../core/responses')

module.exports = {
    name:"setup",
    description: "Configs the bot for the Roleplay service",
    type: "command",
    enabled: true,
    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("Configs the bot for the Roleplay service")
        .addRoleOption(opt => 
            opt.setName("admin_role")
                .setDescription("Admin role for the service")
                .setRequired(true))
        .addIntegerOption(opt =>
            opt.setName("max_profiles_per_user")
                .setDescription("Max number of profile per users")),
    
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     * @param {Collection<>Command>} commands 
     */
    execute: async function(interaction, client, commands) {
        const role = interaction.options.getRole("admin_role")
        const max_profles = interaction.options.getInteger("max_profiles_per_user") ?? "infinite"

        const data = {
            admin_role: role.id,
            max_profiles_per_user: max_profles
        }

        await pushData(`/${interaction.guild.id}/config/`, data)
        await pushData(`/${interaction.guild.id}/users/`, {})

        interaction.reply({embeds:[successEmbed("Roleplay service initialized successfully")]})
    }
}