const axios = require('axios');
const config = require('../config').configData();


const apikey = config.apikey; //Assign your api key from openweathermap.org
const units = 'metric';


const getDataCity = async ( city, getBy ) => {

    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ apikey }&units=${ units }`);
                           
    let lat = result.data.coord.lat;
    let lon = result.data.coord.lon;

    return getWeather(lat, lon, getBy);
};

const getWeather = async (lat, lon, getBy = 'current') => {

    const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lon }&units=${ units }&appid=${ apikey }`);

    if(getBy === 'current') {
        return result.data.current;
    } else if ( getBy === 'hourly' ) {
        return result.data.hourly;
    } else if ( getBy === 'daily' ) {
        return result.data.daily;
    }

};
         
module.exports = {
    getDataCity
};