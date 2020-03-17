const request = require('request');

const geocode = (address, callback) => {
    address = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXhyYXkiLCJhIjoiY2s3bTBtMW8zMDBzbDNkczZzNjVkcnBmayJ9.AUy4Yspei1l1Q549yQIKWQ`;
    request({url, json: true},(error,{body})=>{
        if(error){
            callback('Ubabel to connect to location services', undefined)
        } else if (body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)            
        } else {            
            callback(undefined, {
                latitude:body.features[0].center[1],
                longtitude:body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    });
}

// export default geocode;
module.exports = geocode;