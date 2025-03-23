const { SlashCommandBuilder, BaseInteraction } = require('discord.js');

const slashCommand = new SlashCommandBuilder();
slashCommand.setName('ping')
slashCommand.setDescription('Replies with Pong!')

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