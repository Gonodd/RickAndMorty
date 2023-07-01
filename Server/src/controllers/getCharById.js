const axios = require('axios');
const express = require('express');
const URL = "https://rickandmortyapi.com/api/character";


async function getCharById(req, res) {

    try {
        const { id } = req.params
        const response = await axios(`${URL}/${id}`);
        const character = {
            id: response.data.id,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin.name,
            image: response.data.image,
            status: response.data.status
        }
        if (character.name) {
            return res.status(200).json(character);
        } else {
            return res.status(404).send("Not Found")
        }

        res.status(200).json(character);
    } catch (error) {
        res.status(500).send(error.menssage)
    }
}



/*const getCharById = (req, res) => {
    const { id } = req.params
    const character = {};
    axios(`${URL}/${id}`)
        .then((response) => {
            return character = {
                id: response.data.id,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
                origin: response.data.origin.name,
                image: response.data.image,
                status: response.data.status
            }
        })
        .catch((error) => res.status(500).send(error.menssage))
    if (!character) {
        return res.status(404).send("Not Found")
    }
    res.status(200).json(character);
}
*/




/*const getCharById = (res, id) => {
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
*/
module.exports = getCharById;