const request = require('request')


const forecast = ( lat, lon, callback) => { //where we make forecast
    const url = 'https://api.darksky.net/forecast/9b0b0a2dc12f6798803e4069ad0e1129/' + lat + ',' + lon

    request({ url, json:true }, (error, {body}) => {
        if(error){ //no wifi etc
            callback('Unable to connect to location services')
        }else if(body.error){ // no matches
            callback('unable to find the location, try again!',  undefined)
        }else{ // no error we expect
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance of rain."   )
        }
    })
}

module.exports =  forecast