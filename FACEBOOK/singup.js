function btn() {
    const fName = document.querySelector('#first-name').value;
    const sName = document.querySelector('#sur-name').value;
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const brithday = document.querySelector('#date').value;

    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017/';
    const client = new MongoClient(url);

    const data = {
        fristName: 'abc',
        surName: sName,
        username: username,
        password: password,
        brithday: brithday
    }

    async function fetchData() {
        try {
            await client.connect();
            const db = client.db('account');
            const collection = db.collection('user');

            const result = await collection.insertOne(data);

            console.log(`Insear: ${result}`);
        } catch (err) {
            console.log('Error:', err);
        } finally {
            await client.close();
        }
    }

    fetchData();

}