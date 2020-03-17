const request = require('request');

const forecast = (latitude,longtitude,callback) => {
    const url = `https://api.darksky.net/forecast/ab99f5bd7428ee241e9cac56801a77b5/${latitude},${longtitude}?units=si&lang=zh-tw`;
    request({url, json: true}, (error, {body}) => {    
        if(error) {
            callback('Unable to connect to weather sevice!',undefined);
        } else if (body.error){
            callback('Unable to find location',undefined);
        } else {
            callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. Theres is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}

// export default forecast;
module.exports = forecast;
