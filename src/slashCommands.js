const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const { hasProperStructure } = require('./core');
const { logInfo } = require('./core');

require("dotenv").config()

const token = process.env.TOKEN
const client_id = process.env.CLIENT_ID

const categories_path = path.join(__dirname, "commands")
const commands = []

// Extracts every command from the directory
fs.readdirSync(categories_path).forEach(category => {
    const category_path = path.join(categories_path, category)
    const modules = fs.readdirSync(category_path).filter(file => file.endsWith('.js'))

    for(const module of modules) {

        const module_path = path.join(category_path, module)
        const command = require(module_path)

        if(command.type !== "command") return

        if(hasProperStructure(command)){
            if(!command.enabled) return

            commands.push(command.data.toJSON())
        }
    }
})



// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {
        logInfo(`Started refreshing ${commands.length} application (/) commands.`)

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(client_id),
			{ body: commands },
		);

        logInfo(`Successfully reloaded ${data.length} application (/) commands.`)

	} catch (error) {
		console.error(error);
	}
})();