# OpenSea NFT Stats Listing, Sales, and Alert Bot

<h1 align="center">OpenSea NFT Notification Bot</h1>
<div align="center">

<a href="http://www.nftnotice.net/">
  <img align="center" alt="nftwzrd" width="45px" src="https://avatars.githubusercontent.com/u/93735282?s=400&u=d29fa83e02d4386a9cf92c7315f8d355d9fae489&v=4" />
	<code>nftnotice.net</code>
</a>
	<span> ┃ </span>
	
  <a href="https://discord.gg/xHgnePtV7s" style="margin-top: 12px;">
  <img  align="center" alt="Discord link" width="30px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/discord.svg" />
	  <code>Join our discord Server</code>
</a>
<br />

</div>
	
<div align="center">
  <strong>For buying membership please join our discord server 👆👆👆 and create a ticket </strong>
</div>
<br />

</div>
This project is a bot that allows you to track the stats, listings, and sales of your OpenSea collections. It also allows you to receive updates on these events in Discord, Telegram, and Twitter.

## Features

- Get the OpenSea collection stats
- Get the OpenSea listing updates of a collection
- Get the OpenSea sales updates of a collection
- Send the listing, collection stats, and sales updates to a Discord server
- Send the listing, collection stats, and sales updates to a Telegram group
- Send the listing, collection stats, and sales updates to a Twitter post

## Installation

To install and use this bot, you will need to have Node.js and npm installed on your machine.

1. Clone or download this repository
2. Install the dependencies by running `npm install`
3. Create a `.env` file and add your API keys and other configuration details (see the [Configuration](#Configuration) section below for more information)
4. Run the bot using `npm start`

## Configuration

To use this bot, you will need to provide the following information in a `.env` file in the root of the project:

- `DISCORD_TOKEN`: The Discord API token for your bot
- `TELEGRAM_TOKEN`: The Telegram API token for your bot
- `TWITTER_CONSUMER_KEY`: The Twitter API consumer key
- `TWITTER_CONSUMER_SECRET`: The Twitter API consumer secret
- `TWITTER_ACCESS_TOKEN_KEY`: The Twitter API access token key
- `TWITTER_ACCESS_TOKEN_SECRET`: The Twitter API access token secret
- `OPENSEA_API_KEY`: The OpenSea API key

## Usage

To use this bot, you will need to add it to your Discord, Telegram, and/or Twitter account, and invite it to any channels or groups where you want to receive updates.

Once the bot is running, you can use the following commands to track your OpenSea collections:

- `!stats [collectionName]`: Get the stats for the specified collection
- `!listings [collectionName]`: Get the latest listings for the specified collection
- `!sales [collectionName]`: Get the latest sales for the specified collection

## Contributing

We welcome contributions to this project! If you have an idea for a new feature or find a bug, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
