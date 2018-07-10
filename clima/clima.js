const axios = require('axios');


const getClima = async(lat, lng) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=3ad8c1a6630f46e6048f93a7803495e4`
        //console.log(`La url es: ${url}`);
    let resp = await axios.get(url)
    return resp.data.main.temp
}


module.exports = {
    getClima
}