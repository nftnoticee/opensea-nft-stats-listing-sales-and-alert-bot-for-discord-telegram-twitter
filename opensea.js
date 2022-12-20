const OpenSea = require('opensea-js'); //import the OpenSea library

//replace this placeholder with your own OpenSea API key
const OPENSEA_API_KEY = 'YOUR_OPENSEA_API_KEY';

//create a new OpenSea client
const opensea = new OpenSea(OPENSEA_API_KEY);

//function to get the collection stats from OpenSea
async function getCollectionStats() {
    //fetch the collection stats from OpenSea
    const collection = await opensea.getCollection({
        owner: 'opensea',
        slug: 'crypto-kitties',
    });

    //extract the desired stats from the collection object
    const stats = {
        name: collection.name,
        totalSupply: collection.total_supply,
        circulatingSupply: collection.circulating_supply,
        numSales: collection.num_sales,
    };

    //return the extracted stats
    return stats;
}

//function to get the listing updates from OpenSea
async function getListingUpdates() {
    //fetch the listing updates from OpenSea
    const updates = await opensea.getUpdates({
        owner: 'opensea',
        slug: 'crypto-kitties',
        event_type: 'listing_created',
    });

    //return the listing updates
    return updates;
}

//function to get the sales updates from OpenSea
async function getSalesUpdates() {
    //fetch the sales updates from OpenSea
    const updates = await opensea.getUpdates({
        owner: 'opensea',
        slug: 'crypto-kitties',
        event_type: 'sale_created',
    });

    //return the sales updates
    return updates;
}

//main function that gets the collection stats, listing updates, and sales updates
async function main() {
    //get the collection stats
    const collectionStats = await getCollectionStats();

    //get the listing updates
    const listingUpdates = await getListingUpdates();

    //get the sales updates
    const salesUpdates = await getSalesUpdates();

    console.log(collectionStats);
    console.log(listingUpdates);
    console.log(salesUpdates);
}

//run the main function
main();
