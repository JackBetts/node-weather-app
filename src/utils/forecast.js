const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8cc8a34b5e6be808fdc6110469343e8e/' + latitude + ',' + longitude + '?units=si'

    request({url, json : true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to forecast services', undefined)
        } else if (body.error) {
            callback('Unable to find forecast location', undefined)
        } else {
            const currentTemp = body.currently.temperature
            const currentPrecip = body.currently.precipProbability
            const todayData = body.daily.data[0]

            callback(undefined, todayData.summary + ' It is currently ' + currentTemp + ' degrees out. There is a ' + currentPrecip + '% chance of rain')
        }
    })
}

module.exports = forecast