const axios = require('axios');
const config = require('../api');



const getClima = async(lat, lng) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${config.API_OPENWEATHER}`
        //console.log(`La url es: ${url}`);
    let resp = await axios.get(url)
    return resp.data.main.temp
}


module.exports = {
    getClima
}