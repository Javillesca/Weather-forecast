const openwather = require('./service/openweather');

const argv = require('yargs').options({
    city: {
        alias: 'd',
        desc: 'City for weather prediction',
        demand: true
    },
    getBy: {
        alias: 'g',
        desc: 'Weather data format to obtain, \n options: current | hourly | daily',
        demand: false
    }
}).argv;

const getInfo = async(city, getBy = 'current') => {
    const data = await openwather.getDataCity(city, getBy);
    let today = new Date();
    let result = [];

    if(getBy === 'current') {
        try {
            return `The temperature in ${ city } is ${ data.temp }°`;
            
        }  catch(err) {
            return `Failed to retrieve forecast from ${ city }`;
        }
    } else if ( getBy === 'hourly' ) {
        try {

            data.forEach(element => {

                today.setHours(today.getHours() + 1);

                let date = `${ today.getDate() }/${ today.getMonth() }/${ today.getFullYear() } ${ today.getHours()}:${today.getMinutes()}`;
                result.push(`The temperature in ${ city }, ${ date } is ${element.temp}`);
            });

            return result;

        } catch(err) {
            return `Failed to retrieve forecast from ${ city }`;
        }
    } else if ( getBy === 'daily' ) {
        try {   
           
            data.forEach(element => {

                today.setDate(today.getDate() + 1);
                let date = `${ today.getDate() }/${ today.getMonth() }/${ today.getFullYear() }`;

                result.push(`The temperature in ${ city }, ${ date } is ${element.temp.day}º`);
            });

            return result;
           
        }  catch(err) {
            return `Failed to retrieve forecast from ${ city }`;
        }
    }
};

getInfo(argv.city, argv.getBy).then(console.log).catch(console.log);


