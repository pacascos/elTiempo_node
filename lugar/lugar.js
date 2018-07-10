const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&ket=AIzaSyCl4Q_ImbZ2XfFnJpBM9Tz51n4nctSXnIo`)
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