const Twitter = require('twitter');

// Replace YOUR_CONSUMER_KEY, YOUR_CONSUMER_SECRET, YOUR_ACCESS_TOKEN_KEY, and YOUR_ACCESS_TOKEN_SECRET
// with your actual Twitter API keys and tokens
const client = new Twitter({
    consumer_key: 'YOUR_CONSUMER_KEY',
    consumer_secret: 'YOUR_CONSUMER_SECRET',
    access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});

// This is the sales data that you want to send updates for
const sales = {
    'Product A': 100,
    'Product B': 50,
    'Product C': 25
};

// Send the updates to Twitter
function sendUpdates() {
    let message = 'Sales updates:\n';
    for (const product in sales) {
        message += `- ${product}: ${sales[product]} units sold\n`;
    }
    client.post('statuses/update', { status: message }, function (error, tweet, response) {
        if (error) {
            console.error(error);
        }
    });
}

// Send the updates every hour
setInterval(sendUpdates, 3600 * 1000);
