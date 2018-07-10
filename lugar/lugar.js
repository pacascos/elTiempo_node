const axios = require('axios');
const config = require('../api');

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&ket=${config.API_GOOGLE}`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay respuesta para la dirección: ${direccion}`);
    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;
    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}