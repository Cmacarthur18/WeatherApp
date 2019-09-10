//making a function out of geocode 
const request = require('request') // how to get url

const geocode = (address, callback) => { // once we have lat and longitude we use call back
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY21hY2FydGh1cjE4IiwiYSI6ImNqeTNpYXhmeTEwMDkzYnE4aWs1MnRrYmEifQ.-M_HfMMAFqTWlE16TglZ6A&limit=1()'

    request({ url, json:true }, (error, {body}) => {
        if(error){ //no wifi etc
            callback('Unable to connect to location services')
        }else if(body.features.length === 0){ // no matches
            callback('unable to find the location, try again!',  undefined)
        }else{ // no error we expect
            callback(undefined,  { // this is an object, not a function
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}



module.exports = geocode

