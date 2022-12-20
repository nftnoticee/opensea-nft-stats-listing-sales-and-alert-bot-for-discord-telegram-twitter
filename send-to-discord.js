const Discord = require('discord.js');

// Replace YOUR_DISCORD_TOKEN and YOUR_CHANNEL_ID with your actual Discord token and channel ID
const client = new Discord.Client();
client.login('YOUR_DISCORD_TOKEN');

const channel = client.channels.cache.get('YOUR_CHANNEL_ID');

// This is the list of items that you want to send updates for
const items = ['item 1', 'item 2', 'item 3'];

// Send the updates to the Discord channel
function sendUpdates() {
    let message = 'Listing updates:\n';
    for (const item of items) {
        message += `- ${item}\n`;
    }
    channel.send(message);
}

// Send the updates every hour
setInterval(sendUpdates, 3600 * 1000);