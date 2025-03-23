const { SlashCommandBuilder, BaseInteraction, EmbedBuilder, AttachmentBuilder } = require('discord.js');
const minecraft = require('minecraft-protocol');
const config = require('../../config.json');

const slashCommand = new SlashCommandBuilder();
slashCommand.setName('status')
slashCommand.setDescription('Gets the minecraft server status.')

/**
 * 
 * @param {BaseInteraction} interaction 
 */
async function execute(interaction) {
	minecraft.ping({
        host: config.server_ip,
        port: config.server_port,
    }, async (error, response) => {
        if (error) {
			const errorEmbed = new EmbedBuilder();
			responseEmbed.setColor(0xFF0000);
			errorEmbed.setTitle("Server is not available!");
			await interaction.reply({embeds: [errorEmbed]});
            return;
        }

		const responseEmbed = new EmbedBuilder();
		responseEmbed.setColor(0x00FF00);
		responseEmbed.setTitle("Server is up!");

		let description = "```" + `${config.server_ip}:${config.server_port}` + "```\n";
		if(response.description.text != undefined && response.description.text != ""){
			description += `MOTD: ${response.description.text}`;
		}
		responseEmbed.setDescription(description);
		responseEmbed.addFields(
			{ name: 'Version', value: `${response.version.name} (${response.version.protocol})`},
			{ name: 'Online Players', value: `${response.players.online}`, inline: true },
			{ name: 'Max Players', value: `${response.players.max}`, inline: true },
			{ name: 'Ping', value: `${response.latency}`, inline: true }
		);
		let files = []
		if (response.favicon) {
			const base64Data = response.favicon.replace(/^data:image\/png;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
			const attachment = new AttachmentBuilder(buffer, { name: 'favicon.png' });
            responseEmbed.setThumbnail('attachment://favicon.png');
			files.push(attachment);
        }
		responseEmbed.setTimestamp()
		await interaction.reply({embeds: [responseEmbed], files: files});
    });
}

module.exports = {
	data: slashCommand,
	execute
};