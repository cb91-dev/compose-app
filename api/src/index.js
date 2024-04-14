const express = require('express')
const { port, host, authUrl } = require("./config");
const axios = require('axios')
const connectToDatabase = require('./dbConnect');

const app = express();
const MONGO_URL = 'mongodb://admin:securepassword@compose-api-db:27017/api'
// Meta data on start up
const startServer = async () => {
    try {
      await connectToDatabase()
      app.listen(port, () => {
		console.log(`Api is now running on: ${port}`)
        console.log(`Host address: ${host}`)
        console.log(`Database: ${MONGO_URL}`)
        console.log(`Auth url: ${authUrl}`)
      })
    } catch (error) {
      console.error("Failed to start api server")
    }
}

// Sample request to test api service
app.get('/api/test',(req, res) => {
	res.send("api working, it's the best")
})

// Sample request to auth service
app.get('/currentUser', (req, res) => {
    axios.get(authUrl + '/user')
        .then((response) => {
            console.log(response)
            res.json({
                currentUser: true,
                currentUserAuthInfo: response.data
            })
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
            res.status(500).send("Error fetching user data");
        });
});

app.get('/auth/user', async (req, res, next) => {
    try {
        res.send('User info');
    } catch (error) {
        next(error); // This ensures the error is caught by your error handling middleware
    }
});

// const mongoose = require('mongoose')
// const testSchema = new mongoose.Schema({ name: String })
// const Sample = mongoose.model('testSchema', testSchema)
// const silence = new Sample({name: 'Silence'})
// 		silence.save()
// 		.then(res => {
// 			if (res.errors) return console.log(errors)
// 			console.log(res)
// 		})

app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!');
});

startServer()