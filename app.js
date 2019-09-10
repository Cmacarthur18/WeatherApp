 const request = require('request') // how to get url
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//console.log(process.argv) get user input with out using yargs
const input = process.argv[2]
if(!input ){ //no input
    console.log('Please provide a address')
}else{    geocode(input, (error, {latitude, longitude, location})  => { // second parameter is callback

        if(error){
            return console.log(error)
        } 
    
        forecast(latitude, longitude , (error, forecastData) => { // given lat and lon
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
    })
}

