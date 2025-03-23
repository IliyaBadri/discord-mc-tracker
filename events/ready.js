const { Events, Client, ActivityType } = require('discord.js');
const minecraft = require('minecraft-protocol');
const config = require('../config.json');

let statuses = [];
let statusIndex = 0;

/**
 * 
 * @param {Client} client 
 */
async function updateStatus(client) {
	minecraft.ping({
        host: config.server_ip,
        port: config.server_port,
    }, async (error, response) => {
        if (error) {
            return;
        }

		statuses = [
			{ type: ActivityType.Playing, text: `${config.server_ip}:${config.server_port}`},
			{ type: ActivityType.Watching, text: `${response.players.online} Players` }
		];
    });
	
	if(statusIndex > statuses.length - 1){
		return;
	}
	const currentStatus = statuses[statusIndex];
    client.user.setPresence({
        activities: [
            {
                name: currentStatus.text,
                type: currentStatus.type,
                url: currentStatus.url || null
            },
        ],
        status: 'online',  // You can change this to 'dnd', 'idle', or 'invisible'
    });

    statusIndex = (statusIndex + 1) % statuses.length;
}

/**
 * 
 * @param {Client} client 
 */
async function execute(client){
	console.log(`Ready! Logged in as ${client.user.tag}`);
    setInterval(() => {
        updateStatus(client);
    }, 5000);
}

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute
};