const { MongoClient } = require('mongodb');

async function main() {

	const uri = "mongodb+srv://naveensingh:VPZihvz0lM57Ags9@freecluster.7vqvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

	try {
		await client.connect();
		await listDatabases(client);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}


main().catch(console.err);


async function listDatabases(client) {
	const databasesList = await client.db().admin().listDatabases()
	console.log("Databases", databasesList);
	databasesList.databases.forEach(db => console.log(` - ${db.name}`));

}