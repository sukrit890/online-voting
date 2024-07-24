const { Client } = require('pg');

const client = new Client({
    "user": "user2",
    "password": "password2",
    "host": "host2.example.com",
    "port": 5432,
    "database": "database2"
});

client.connect().then(() =>
{
    console.log("Server, You Have Successfully connected to PostgreSql");
})
.catch((error) =>
{
    console.log("Server, Unable to connect to PostgreSql");
	console.error(error);
});

module.exports = client;