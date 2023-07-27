const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  const { id } = req.params;

  axios.get(`${URL}${id}`)
    .then(({ data }) => {
      if (data.name) {
        res.status(200).json({
          id: data.id,
          name: data.name,
          status: data.status,
          species: data.species,
          origin: data.origin,
          image: data.image,
          gender: data.gender
        });
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch((error) => res.status(500).json({ message: error.message }));
}

module.exports =  getCharById;

