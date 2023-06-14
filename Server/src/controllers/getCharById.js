const axios = require('axios');

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        //.then((response)=>response.JSON)//! es necesario?
        .then(response => {
            const character = {
                id: id,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
                origin: response.data.origin.name,
                image: response.data.image,
                status: response.data.status
            };
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify(character)
            );
        })
        .catch(error => {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end(error.message);
        });
}

module.exports = getCharById;