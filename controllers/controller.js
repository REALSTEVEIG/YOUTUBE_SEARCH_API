const baseUlr = `https://www.googleapis.com/youtube/v3`
const axios = require('axios')
const apiKey = process.env.API_KEY
const { google } = require('googleapis')

/*const youtube = google.youtube({
    version : 'v3',
    auth : apiKey
})*/


exports.search = async (req, res, next) => {
 try {
    const searchQuery = req.query.searchQuery
    
    const url = `${baseUlr}/search?key=${apiKey}&part=snippet&type=video&maxResults=50&q=${searchQuery}`

    const response = await axios.get(url)

    const array = response.data.items.map((item) => item.snippet.title)

    res.json({array})
 } catch (error) {
    next(error)
 }
}

/*
exports.search2 = async (req, res, next) => {
    try {
        let result = []

        const searchQuery = req.query.searchQuery
    
        const url = `${baseUlr}/search?key=${apiKey}&part=snippet&type=video&maxResults=20&q=${searchQuery}`
    
        const response = await axios.get(url)
    
        const array = response.data.items

        array.forEach((element) => {
            result.push(element.snippet.title)
        })

        res.send(result)
        console.log(result)
    } catch (error) {
        next(error)
    }
}

//for google API
exports.search3 = async (req, res, next) => {
    try {
        const searchQuery = req.query.searchQuery
        const response = await youtube.search.list({
            part : `snippet`,
            type : `video`,
            q : searchQuery,
            maxResults : 50
        })

        const array = response.data.items.map((item) => item.snippet.title)

        res.send(array)
        console.log(array)
    } catch (error) {
        next(error)
    }
} */