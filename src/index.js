const { Client, GatewayIntentBits, Collection } = require("discord.js")
const { loadCommands } = require("./core")
const { loadEvents } = require("./core")

require("dotenv").config()

const DiscordClient = new Client({ intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds] })
const token = process.env.TOKEN

const events = new Collection()
const commands = new Collection()

loadCommands(DiscordClient, commands)
loadEvents(DiscordClient, commands, events)


DiscordClient.login(token)