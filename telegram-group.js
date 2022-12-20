const MongoClient = require('mongodb').MongoClient;
const request = require('request');

const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID';

// Replace YOUR_MONGODB_URI with the connection string for your MongoDB instance
const MONGODB_URI = 'YOUR_MONGODB_URI';

MongoClient.connect(MONGODB_URI, (err, client) => {
    if (err) {
        console.error(err);
        return;
    }

    // Get the collection stats for all collections in the database
    client.db().command({ collStats: 1 }, (err, stats) => {
        if (err) {
            console.error(err);
            return;
        }

        // Format the collection stats as a string
        let message = '';
        for (const collection of stats.collections) {
            message += `*${collection.ns}*:\n`;
            message += `- Size: ${collection.size} bytes\n`;
            message += `- Number of documents: ${collection.count}\n`;
            message += `- Storage size: ${collection.storageSize} bytes\n`;
        }

        // Send the collection stats to Telegram
        request.post(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                json: {
                    chat_id: TELEGRAM_CHAT_ID,
                    parse_mode: 'Markdown',
                    text: message,
                },
            },
            (error, response, body) => {
                if (error) {
                    console.error
