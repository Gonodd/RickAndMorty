let myFavorites = [];

const postFav = (req, res) => {
    const { character } = req.body.data
    myFavorites.push(character);
    res.staus(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params
    const result = myFavorites.filter((char) => char.id !== id);
    myFavorites = result;
    res.staus(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav,
}