const { MongoClient } = require('mongodb');


async function main() {

	const uri = "mongodb+srv://naveensingh:VPZihvz0lM57Ags9@freecluster.7vqvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

	try {
		await client.connect();
		//await listDatabases(client);
		// await createListing(
		// 	client,
		// 	{
		// 		name: "Lovely Loft",
		// 		summary:"A Charming left in Paris",
		// 		bedrooms: 1,
		// 		bathrooms:1
		// 	}
		// 	);
		await createMultipleListing(client,[
			{
			name: "Inifite Views",
			summary: "Modern home with inifinite from infinite pool",
			property_type: "House",
			bedrooms:5,
			bathrooms:4.5,
			beds:5
		},{
			name: "Private room in London",
			property_name: "Apartment",
			bedrooms:1,
			bathrooms:1,
		},{
			name: "Beautiful Beach House",
			summary: "Enjoy relaxed beach living in the house with a private beach",
			bedrooms:2,
			bathrooms:1,
		},
	])
	await findOneListingByName(client,"Beautiful Beach House");
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}


main().catch(console.err);

async function findOneListingByName(client,nameOfListing){
	const result = await client.db("simple_airbnb").collection("listingAndReviews").findOne({ name: nameOfListing});
	if(result){
		console.log(`Found a listing in the collection with name '${nameOfListing}':`);
		console.log(result)
	}else{
		console.log(`No Listing found with name '${nameOfListing}'`)
	}
}

// Update 

async function updateListingByName(client,nameOfListing,updateListing)
{
	const result = await client.db("simple_airbnb").collection("listingAndReviews").updateOne(
		{ name : nameOfListing},
		{ $set: updateListing}
	);
}

async function createMultipleListing(client,newLisitng){
	const result = await client.db("simple_airbnb").collection("listingAndReviews").insertMany(newLisitng)
	console.log(`${result.insertedCount} new listing(s) created with the following id(s)`);
	console.log(result.insertedIds);
}

async function createListing(client,newListing){
	const result = await client.db("sample_airbnb").collection("listingAndReviews").insertOne(newListing);
	console.log(`New Listing Created with the following id:${result.insertedId}`);
}


async function listDatabases(client) {
	const databasesList = await client.db().admin().listDatabases()
	console.log("Databases", databasesList);
	databasesList.databases.forEach(db => console.log(` - ${db.name}`));

}