const express = require('express')
const { port, host, MONGO_URL, apiUrl } = require("./config")
const connectToDatabase = require('./dbConnect');

// Setup app
const app = express()

// Meta data on start up
const startServer = async () => {
    try {
      await connectToDatabase()
			app.listen(port, () => {
				console.log(`Auth is now running on: ${port}`)
				console.log(`Host address: ${host}`)
				console.log(`Database: ${MONGO_URL}`)
				console.log(`Api url: ${apiUrl}`)
			})
    } catch (error) {
      console.error("Failed to start api server")
    }
}

// Sample request to test auth service
app.get('/test',(req, res) => {
	res.send("Auth service is working")
})

// Sample response of a user
app.get('/auth/user',(req, res) => {
	res.json({
		id: 123,
		email: 'foo@goo.com'
	})
})

// Setup database connection
startServer()