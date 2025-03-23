const { SlashCommandBuilder, BaseInteraction } = require('discord.js');

const slashCommand = new SlashCommandBuilder();
slashCommand.setName('status')
slashCommand.setDescription('Gets the minecraft server status.')

/**
 * 
 * @param {BaseInteraction} interaction 
 */
async function execute(interaction) {
	await interaction.reply('Pong!');
}

module.exports = {
	data: slashCommand,
	execute
};