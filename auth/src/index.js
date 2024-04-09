const express = require('express')
const { port, host, db, api_url } = require("./config")
const { connectDb } = require('./dbConnect')

const app = express()

// Meta data on start up
const startServer = async () => {
	app.listen(port, () => {
		console.log(`Auth is now running on: ${port}`)
		console.log(`Host address: ${host}`)
		console.log(`Database: ${db}`)
		console.log(`Api url: ${api_url}`)
	})
}

// Sample request to test auth service
app.get('/test',(req, res) => {
	res.send("Auth service is working")
})

// Sample response of a user
app.get('/user',(req, res) => {
	res.json({
		id: 123,
		email: 'foo@goo.com'
	})
})

connectDb()
	.on('error', console.log)
	.on('disconnected', connectDb)
	.once("open", startServer)