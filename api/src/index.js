const express = require('express')
const { port, host, db, auth_url } = require("./config");
const axios = require('axios')
const { connectDb } = require('./dbConnect');

const app = express();

// Meta data on start up
const startServer = async () => {
	app.listen(port, () => {
		console.log(`Api is now running on: ${port}`)
		console.log(`Host address: ${host}`)
		console.log(`Database: ${db}`)
		console.log(`Auth url: ${auth_url}`)
	})
}

// Sample request to test api service
app.get('/test',(req, res) => {
	res.send("api working, it's the best")
})

// Sample request to auth service
app.get('/auth/currentUser', (req, res) => {
	axios.get(auth_url+'/user')
	.then((response) => {
		console.log(response)
		res.json({
			currentUser: true,
			currentUserAuthInfo: response.data
		})
	})
})

connectDb()
	.on('error', console.log)
	.on('disconnected', connectDb)
	.once("open", startServer)

// const mongoose = require('mongoose')
// const testSchema = new mongoose.Schema({ name: String })
// const Sample = mongoose.model('testSchema', testSchema)
// const silence = new Sample({name: 'Silence'})
// 		silence.save()
// 		.then(res => {
// 			if (res.errors) return console.log(errors)
// 			console.log(res)
// 		})